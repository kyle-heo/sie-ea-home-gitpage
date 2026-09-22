<template>
  <PageHeader
    title="Closed Loop Sample System"
    description="폐쇄형 루프 샘플링 시스템을 통한 안전하고 정확한 샘플링 솔루션"
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Closed Loop Sample System</h2>
          <p class="section-description">
            폐쇄형 루프 샘플링 시스템을 통한 안전하고 정확한 샘플링 솔루션
          </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">시스템 개요</h4>
                <p class="card-description">
                  안전하고 효율적인 샘플링을 위한 폐쇄형 루프 시스템으로, 공정 유체의 대표적인
                  샘플을 안전하게 추출하고 분석합니다.
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
