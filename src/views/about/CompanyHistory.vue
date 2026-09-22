<template>
  <PageHeader
    title="회사연혁"
    description="SIE-EA의 성장 과정과 주요 이정표를 확인하실 수 있습니다."
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">COMPANY HISTORY</h2>
          <p class="section-description">
            SIE-EA의 성장 과정과 주요 이정표를 확인하실 수 있습니다.
          </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="timeline">
                  <!-- 2023년 -->
                  <div class="timeline-item">
                    <div class="timeline-year">
                      <h3>2023년</h3>
                    </div>
                    <div class="timeline-content">
                      <h4>2월</h4>
                      <p>Tube Line 관련 특허 취득</p>
                      <p class="text-muted">(Tube 내부 Oil Cleaning System)</p>
                    </div>
                  </div>

                  <!-- 2022년 -->
                  <div class="timeline-item">
                    <div class="timeline-year">
                      <h3>2022년</h3>
                    </div>
                    <div class="timeline-content">
                      <h4>3월</h4>
                      <p>ISO 9001 / ISO 14001 취득</p>
                    </div>
                  </div>

                  <!-- 2021년 -->
                  <div class="timeline-item">
                    <div class="timeline-year">
                      <h3>2021년</h3>
                    </div>
                    <div class="timeline-content">
                      <h4>12월</h4>
                      <p>우수기술기업 인증</p>
                      <h4>4월</h4>
                      <p>환경측정기기 형식승인</p>
                      <p class="text-muted">(굴뚝배출가스 : SO₂, NOx, O₂)</p>
                    </div>
                  </div>

                  <!-- 2020년 -->
                  <div class="timeline-item">
                    <div class="timeline-year">
                      <h3>2020년</h3>
                    </div>
                    <div class="timeline-content">
                      <h4>12월</h4>
                      <p>SIE 설립</p>
                    </div>
                  </div>
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

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
  margin-left: -1px;
}

.timeline-item {
  margin-bottom: 50px;
  position: relative;
}

.timeline-year {
  text-align: right;
  padding-right: 30px;
  width: 50%;
  float: left;
}

.timeline-content {
  margin-left: 50%;
  padding-left: 30px;
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  background: #007bff;
  border-radius: 50%;
}

.timeline-content h4 {
  color: #007bff;
  margin-bottom: 10px;
}

.text-muted {
  color: #6c757d;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-year {
    float: none;
    width: auto;
    text-align: left;
    padding-left: 60px;
    padding-right: 0;
  }

  .timeline-content {
    margin-left: 0;
    padding-left: 60px;
  }

  .timeline-content::before {
    left: 24px;
  }
}
</style>
