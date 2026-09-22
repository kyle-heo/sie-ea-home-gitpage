<template>
  <PageHeader title="공지사항" description="회사의 주요 공지사항과 소식을 확인하실 수 있습니다." />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">NOTICES</h2>
          <p class="section-description">회사의 주요 공지사항과 소식을 확인하실 수 있습니다.</p>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div v-if="loading" class="text-center py-5">
                  <div class="spinner-border text-primary" role="status"></div>
                  <p class="mt-2 text-muted">공지사항을 불러오는 중입니다...</p>
                </div>

                <div v-else-if="notices.length === 0" class="text-center py-5 text-muted">
                  등록된 공지사항이 없습니다.
                </div>

                <div v-else class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th style="width: 80px" class="text-center">번호</th>
                        <th style="width: 100px" class="text-center">분류</th>
                        <th>제목</th>
                        <th style="width: 120px" class="text-center">작성자</th>
                        <th style="width: 120px" class="text-center">등록일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="item in notices" :key="item.id">
                        <tr
                          @click="toggleNotice(item.id)"
                          style="cursor: pointer"
                          :class="{ 'table-active': activeId === item.id }"
                        >
                          <td class="text-center">{{ item.id }}</td>
                          <td class="text-center">
                            <span
                              class="badge"
                              :class="item.category === '공지' ? 'bg-danger' : 'bg-primary'"
                            >
                              {{ item.category || '공지' }}
                            </span>
                          </td>
                          <td class="font-weight-bold">
                            {{ item.title }}
                            <i
                              class="fa"
                              :class="activeId === item.id ? 'fa-chevron-up' : 'fa-chevron-down'"
                              style="font-size: 0.8rem; margin-left: 8px; color: #888"
                            ></i>
                          </td>
                          <td class="text-center text-muted">{{ item.author || '관리자' }}</td>
                          <td class="text-center text-muted">{{ item.date }}</td>
                        </tr>
                        <tr v-if="activeId === item.id" class="notice-detail-row">
                          <td colspan="5" class="p-4 bg-light">
                            <div class="notice-content">
                              <p style="white-space: pre-line; line-height: 1.8; color: #444">
                                {{ item.content }}
                              </p>
                            </div>
                          </td>
                        </tr>
                      </template>
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
import { getNotices } from '@/api'

const notices = ref([])
const loading = ref(true)
const activeId = ref(null)

const toggleNotice = id => {
  activeId.value = activeId.value === id ? null : id
}

onMounted(async () => {
  try {
    notices.value = await getNotices()
  } catch (e) {
    console.error('공지사항 로드 오류:', e)
  } finally {
    loading.value = false
  }
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

.table th {
  border-top: none;
  font-weight: 600;
  color: #444;
}

.notice-detail-row td {
  border-top: none;
  background-color: #f8f9fa;
}

.badge {
  padding: 5px 8px;
  font-size: 0.75rem;
  font-weight: 500;
}

.bg-danger {
  background-color: #f5593d !important;
  color: #fff;
}

.bg-primary {
  background-color: #51cbce !important;
  color: #fff;
}
</style>
