<template>
  <PageHeader
    title="HVAC"
    description="Heating, Ventilation, and Air Conditioning 시스템을 제공합니다."
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">HVAC</h2>
          <p class="section-description">
            Heating, Ventilation, and Air Conditioning 시스템을 제공합니다.
          </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">HVAC 시스템</h4>
                <p class="card-description">
                  난방, 환기, 공기조화 시스템을 통한 최적의 환경 관리 솔루션을 제공합니다.
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
