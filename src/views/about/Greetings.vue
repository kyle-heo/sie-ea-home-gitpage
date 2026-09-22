<template>
  <PageHeader title="인사말" description="SIE-EA를 찾아주신 여러분께 진심으로 감사드립니다." />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">GREETINGS</h2>
          <p class="section-description">SIE-EA를 찾아주신 여러분께 진심으로 감사드립니다.</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">대표이사 인사말</h3>
                <p class="card-description">
                  SIE는 Analyzer System Integration 업체로 Oil Refinery, Petrochemical & Chemical,
                  Iron & Steel, Power Plant, Laboratory, Environment, Semiconductor 산업에 적용되는
                  Analyzer 및 System을 공급하고 있습니다.
                </p>
                <p class="card-description">
                  Analyzer Package System 분야에서 다양한 현장 경험을 통한 우수한 기술력을 보유하고
                  있습니다. 이를 바탕으로 System Engineering과 Design Engineering 을 제공하며,
                  동시에 제품 서비스 및 Commissioning & Start-up, Maintenance 를 위한 현장 지원도
                  함께 제공하고 있습니다.
                </p>
                <p class="card-description">
                  고객의 신뢰를 최우선으로 생각하며, 최고의 기술력과 서비스로 보답하겠습니다.
                </p>
                <div class="ceo-signature">
                  <p>SIE-EA 대표이사</p>
                  <p>Jace HEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row roles-section">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="roles-title">Roles & Responsibilities</h4>
                <ul class="roles-list">
                  <li>
                    <strong>Project Management</strong>
                    <ul>
                      <li>Project Scope Management</li>
                      <li>Project Time Management</li>
                      <li>Project Cost Management</li>
                      <li>Project Quality Management</li>
                      <li>Project Human Resource Management</li>
                      <li>Project Communications Management</li>
                      <li>Project Risk Management</li>
                      <li>Project Procurement Management</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="roles-title">Project Engineering</h4>
                <ul class="roles-list">
                  <li>Analytical Application Engineering</li>
                  <li>Chemical Engineering</li>
                  <li>Electric Engineering</li>
                  <li>Process Engineering</li>
                  <li>Instrument & Mechanical Engineering</li>
                  <li>System Design & Engineering</li>
                  <li>Codes & Standards Compliance</li>
                  <li>Chemical Process Calculations</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="roles-title">Support & Services</h4>
                <ul class="roles-list">
                  <li>Start-up & Commissioning</li>
                  <li>F.A.T (Factory Acceptance Test)</li>
                  <li>S.A.T ( Site Acceptance Test)</li>
                  <li>Trouble Shooting & Maintenance Service</li>
                  <li>On-Site Supervision</li>
                  <li>On-site Surveys / Consulting</li>
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

.card-title {
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
}
.card-description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}
.ceo-signature {
  margin-top: 40px;
  text-align: right;
  font-style: italic;
  color: #333;
}
.ceo-signature p {
  margin: 0;
  line-height: 1.5;
}

.roles-section {
  margin-top: 40px;
}

.roles-title {
  font-weight: 600;
  color: #007bff;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.roles-list {
  padding-left: 0;
  list-style: none;
}

.roles-list > li {
  margin-bottom: 15px;
}

.roles-list strong {
  font-weight: 600;
  color: #333;
}

.roles-list ul {
  padding-left: 20px;
  list-style: disc;
  margin-top: 10px;
}

.roles-list ul li {
  color: #555;
  margin-bottom: 8px;
  font-size: 0.95rem;
}
</style>
