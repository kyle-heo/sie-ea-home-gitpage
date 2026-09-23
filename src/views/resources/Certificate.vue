<template>
  <PageHeader title="인증서" description="SIE의 품질·환경·기술·형식승인 및 특허 현황" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CERTIFICATE</h2>
          <p class="section-description">제공된 인증 자료를 기준으로 정리한 SIE 인증 현황입니다.</p>
        </div>

        <div class="row">
          <div v-for="item in certificates" :key="item.title" class="col-lg-4 col-md-6 col-12 mb-4">
            <div class="card certificate-card h-100">
              <div class="card-body">
                <div class="certificate-type">{{ item.type }}</div>
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-description certificate-description">{{ item.description }}</p>
                <div v-if="item.number" class="meta-row"><strong>번호</strong><span>{{ item.number }}</span></div>
                <div v-if="item.date" class="meta-row"><strong>등록/발급</strong><span>{{ item.date }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'

const certificates = [
  {
    type: 'QUALITY',
    title: 'ISO 9001:2015',
    description: 'Design and Manufacture of Analyser Package System (Measuring and Explosion Proof Devices)',
    number: '121341/A/0001/UK/Kr',
    date: '2022-03-19'
  },
  {
    type: 'ENVIRONMENT',
    title: 'ISO 14001:2015',
    description: 'Design and Manufacture of Analyser Package System (Measuring and Explosion Proof Devices)',
    number: '121341/A/0001/UK/Kr',
    date: '2022-03-19'
  },
  {
    type: 'TECHNOLOGY',
    title: '우수기술기업 인증서',
    description: '기술분류: 자동화제어기기 / 핵심기술명: 석유화학분석 관련 기기 및 연구개발 및 제조',
    number: 'NDB-2021-01-084425',
    date: '2021-12-21'
  },
  {
    type: 'TYPE APPROVAL',
    title: '환경측정기기 형식승인',
    description: '굴뚝배출가스 연속자동측정기 및 그 부속기기: SO₂, NOx, O₂ / SERVOPRO 4900 Analyzer',
    number: '제ATMSGS-2021-16호 / 17호 / 18호',
    date: '2021'
  },
  {
    type: 'PATENT',
    title: '특허증',
    description: '튜브의 내부를 세척 및 건조하도록 구성된 클리닝 시스템 및 그 방법',
    number: '제10-2505826호',
    date: '2023-02-27'
  }
]
</script>

<style scoped>
.section-header { text-align: center; padding: 40px 0; }
.section-title { font-size: 2.2rem; font-weight: 600; color: #333; margin-bottom: 15px; }
.section-description { font-size: 1.2rem; color: #666; margin-bottom: 40px; }
.certificate-card { height: 100%; border: 1px solid #e4e7eb; }
.certificate-type { display: inline-block; padding: 5px 9px; border-radius: 4px; background: #eef5ff; color: #0068d9; font-weight: 700; font-size: .78rem; margin-bottom: 14px; }
.certificate-description { white-space: pre-line; line-height: 1.65; }
.meta-row { display: flex; gap: 12px; border-top: 1px solid #eee; padding-top: 10px; margin-top: 10px; font-size: .9rem; }
.meta-row strong { min-width: 68px; }
</style>
