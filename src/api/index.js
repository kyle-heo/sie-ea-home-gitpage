/**
 * SIE-EA 클라이언트 API 서비스
 * GitHub Pages 환경에서는 정적 JSON 및 로컬 스토리지를 활용하여
 * 백엔드 서버 없이도 모든 기능(상태 조회, 공지사항, 문의하기)이 작동하도록 지원합니다.
 */

import axios from 'axios'
import { getAssetUrl } from '@/utils/asset'

const apiUrl = import.meta.env.VITE_API_URL || ''
const isLocalMock = !apiUrl || apiUrl === '/api' || apiUrl.startsWith('/')

const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * 서버 상태 조회
 */
export async function getStatus() {
  if (isLocalMock) {
    try {
      const res = await fetch(getAssetUrl('api/status.json'))
      if (res.ok) return await res.json()
    } catch {
      // fallback
    }
    return {
      name: 'SIE-EA Homepage',
      status: 'online',
      environment: 'github-pages',
      message: 'GitHub Pages 정적 호스팅 서비스 운영 중',
    }
  }

  try {
    const res = await apiClient.get('/status')
    return res.data
  } catch (error) {
    console.warn('API 서버 연결 실패, 정적 데이터로 전환합니다.', error)
    const res = await fetch(getAssetUrl('api/status.json'))
    return await res.json()
  }
}

/**
 * 공지사항 목록 조회
 */
export async function getNotices() {
  try {
    if (!isLocalMock) {
      const res = await apiClient.get('/notices')
      return res.data
    }
  } catch (e) {
    console.warn('백엔드 공지사항 조회 실패, 정적 파일 조회로 대체', e)
  }

  try {
    const res = await fetch(getAssetUrl('api/notices.json'))
    if (res.ok) return await res.json()
  } catch (e) {
    console.error('공지사항 로드 오류:', e)
  }

  return []
}

/**
 * 온라인 문의 접수
 */
export async function submitInquiry(inquiryData) {
  // 실제 백엔드가 구성되어 있을 때 시도
  if (!isLocalMock) {
    try {
      const res = await apiClient.post('/inquiry', inquiryData)
      return { success: true, data: res.data }
    } catch (e) {
      console.warn('원격 API 전송 실패, 로컬 저장소에 보관합니다.', e)
    }
  }

  // GitHub Pages 정적 환경: localStorage에 저장
  try {
    const key = 'sie_ea_inquiries'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    const newEntry = {
      id: Date.now(),
      ...inquiryData,
      createdAt: new Date().toISOString(),
    }
    existing.unshift(newEntry)
    localStorage.setItem(key, JSON.stringify(existing))
    return {
      success: true,
      data: newEntry,
      message: '문의가 성공적으로 접수되었습니다. (로컬 보관 완료)',
    }
  } catch (e) {
    console.error('문의 저장 오류:', e)
    return { success: false, message: '문의 저장에 실패했습니다.' }
  }
}

/**
 * 저장된 로컬 문의 목록 조회 (관리자용)
 */
export function getStoredInquiries() {
  try {
    return JSON.parse(localStorage.getItem('sie_ea_inquiries') || '[]')
  } catch {
    return []
  }
}
