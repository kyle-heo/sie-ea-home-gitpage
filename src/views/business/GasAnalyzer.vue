<template>
  <PageHeader
    title="Gas Analyzer System"
    description="가스 분석 시스템을 통한 정밀한 가스 성분 분석 솔루션"
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Gas Analyzer System</h2>
          <p class="section-description">가스 분석 시스템을 통한 정밀한 가스 성분 분석 솔루션</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">시스템 개요</h4>
                <p class="card-description">
                  다양한 가스 성분을 정밀하게 분석하는 시스템으로, 실시간 가스 모니터링과 안전
                  관리를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

onMounted(() => {
  // 페이지 로드 시 필요한 초기화 작업
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
</style>
