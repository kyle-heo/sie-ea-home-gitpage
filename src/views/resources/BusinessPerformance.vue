<template>
  <PageHeader title="사업실적" description="SIE의 사업 수행 분야와 Engineering 역량" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">BUSINESS PERFORMANCE</h2>
          <p class="section-description">Analyzer System Integration 사업 수행 분야 및 지원 범위</p>
        </div>

        <div class="row">
          <div class="col-lg-6 col-12 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">적용 산업</h4>
                <ul class="content-list">
                  <li v-for="item in industries" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">Project Management</h4>
                <ul class="content-list">
                  <li v-for="item in projectManagement" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">Project Engineering</h4>
                <ul class="content-list">
                  <li v-for="item in engineering" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">Support & Services</h4>
                <ul class="content-list">
                  <li v-for="item in services" :key="item">{{ item }}</li>
                </ul>
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

const industries = [
  'Oil Refinery',
  'Petrochemical & Chemical',
  'Iron & Steel',
  'Power Plant',
  'Laboratory',
  'Environment',
  'Semiconductor'
]

const projectManagement = [
  'Project Scope Management',
  'Project Time Management',
  'Project Cost Management',
  'Project Quality Management',
  'Project Human Resource Management',
  'Project Communications Management',
  'Project Risk Management',
  'Project Procurement Management'
]

const engineering = [
  'Analytical Application Engineering',
  'Chemical Engineering',
  'Electric Engineering',
  'Process Engineering',
  'Instrument & Mechanical Engineering',
  'System Design & Engineering',
  'Codes & Standards Compliance',
  'Chemical Process Calculations',
  'Documentation'
]

const services = [
  'Start-up & Commissioning',
  'F.A.T (Factory Acceptance Test)',
  'S.A.T (Site Acceptance Test)',
  'Trouble Shooting & Maintenance Service',
  'On-Site Supervision',
  'On-site Surveys / Consulting'
]
</script>

<style scoped>
.section-header { text-align: center; padding: 40px 0; }
.section-title { font-size: 2.2rem; font-weight: 600; color: #333; margin-bottom: 15px; }
.section-description { font-size: 1.2rem; color: #666; margin-bottom: 40px; }
.content-list { padding-left: 20px; margin: 0; }
.content-list li { margin-bottom: 9px; line-height: 1.55; color: #000; }
</style>
