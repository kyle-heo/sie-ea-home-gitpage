<template>
  <PageHeader title="관리자 시스템" description="시스템 상태 및 접수된 문의 내역을 확인합니다." />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">ADMIN DASHBOARD</h2>
          <p class="section-description">
            홈페이지 시스템 상태 및 접수된 고객 문의를 관리합니다.
          </p>
        </div>

        <!-- 시스템 상태 카드 -->
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="text-muted mb-2">시스템 상태</h5>
                <h3 class="text-success mb-1">
                  <i class="fa fa-check-circle me-1"></i>
                  {{ status.status === 'online' || status.status === 'running' ? '정상 작동' : '확인 필요' }}
                </h3>
                <small class="text-muted">{{ status.message || '서비스 운영 중' }}</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="text-muted mb-2">호스팅 환경</h5>
                <h3 class="text-primary mb-1">
                  {{ status.environment || 'GitHub Pages' }}
                </h3>
                <small class="text-muted">SPA 정적 웹 호스팅 모드</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="text-muted mb-2">접수된 문의</h5>
                <h3 class="text-danger mb-1">{{ inquiries.length }} 건</h3>
                <small class="text-muted">로컬/원격 접수 데이터</small>
              </div>
            </div>
          </div>
        </div>

        <!-- 문의 목록 -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title mb-0">접수된 문의 내역</h4>
                <button
                  v-if="inquiries.length > 0"
                  class="btn btn-sm btn-outline-danger"
                  @click="clearInquiries"
                >
                  전체 삭제
                </button>
              </div>
              <div class="card-body">
                <div v-if="inquiries.length === 0" class="text-center py-5 text-muted">
                  현재 접수된 문의가 없습니다.
                </div>
                <div v-else class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>접수일시</th>
                        <th>회사명</th>
                        <th>담당자</th>
                        <th>연락처 / 이메일</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>상세내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in inquiries" :key="item.id">
                        <td><small>{{ formatDate(item.createdAt) }}</small></td>
                        <td>{{ item.company }}</td>
                        <td>{{ item.name }}</td>
                        <td>
                          <div>{{ item.phone }}</div>
                          <small class="text-muted">{{ item.email }}</small>
                        </td>
                        <td>
                          <span class="badge bg-secondary">{{ item.type }}</span>
                        </td>
                        <td class="font-weight-bold">{{ item.title }}</td>
                        <td>{{ item.content }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import { getStatus, getStoredInquiries } from '@/api'

const status = ref({
  status: 'online',
  environment: 'GitHub Pages',
  message: '서비스 운영 중',
})

const inquiries = ref([])

const formatDate = dateStr => {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleString('ko-KR')
}

const clearInquiries = () => {
  if (confirm('접수된 모든 문의를 삭제하시겠습니까?')) {
    localStorage.removeItem('sie_ea_inquiries')
    inquiries.value = []
  }
}

onMounted(async () => {
  try {
    status.value = await getStatus()
  } catch (e) {
    console.error('상태 로드 오류:', e)
  }
  inquiries.value = getStoredInquiries()
})
</script>

<style scoped>
.section-header {
  text-align: center;
  padding: 40px 0;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.badge {
  padding: 5px 8px;
  font-size: 0.75rem;
}
</style>
