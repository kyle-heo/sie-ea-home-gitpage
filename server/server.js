import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 8080

// 간단한 JSON 파일 기반 저장소
const DATA_DIR = path.join(__dirname, 'data')
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json')
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2))
}

const server = http.createServer((req, res) => {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  const url = new URL(req.url, `http://localhost:${PORT}`)

  // 1. 상태 확인 (기존 MainController 대체)
  if (url.pathname === '/' || url.pathname === '/api/status') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(
      JSON.stringify({
        message: 'SIE-EA Minimal Backend API Server',
        status: 'running',
        environment: process.env.NODE_ENV || 'development',
        port: PORT,
      })
    )
    return
  }

  // 2. 공지사항 조회
  if (url.pathname === '/api/notices' && req.method === 'GET') {
    const noticesPath = path.join(__dirname, '../public/api/notices.json')
    if (fs.existsSync(noticesPath)) {
      const data = fs.readFileSync(noticesPath, 'utf-8')
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(data)
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify([]))
    }
    return
  }

  // 3. 문의하기 접수
  if (url.pathname === '/api/inquiry' && req.method === 'POST') {
    let body = ''
    req.on('data', chunk => {
      body += chunk
    })
    req.on('end', () => {
      try {
        const inquiry = JSON.parse(body)
        inquiry.id = Date.now()
        inquiry.createdAt = new Date().toISOString()

        const list = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'))
        list.unshift(inquiry)
        fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2))

        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(
          JSON.stringify({
            success: true,
            message: '문의가 성공적으로 등록되었습니다.',
            data: inquiry,
          })
        )
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify({ success: false, error: '잘못된 요청 데이터입니다.' }))
      }
    })
    return
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify({ error: 'Not Found' }))
})

server.listen(PORT, () => {
  console.log(`[SIE-EA Backend] 최소형 백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`)
})
