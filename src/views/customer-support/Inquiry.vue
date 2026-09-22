<template>
  <PageHeader
    title="문의하기"
    description="제품 문의, 기술 상담, 견적 요청 등을 신청하실 수 있습니다."
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">INQUIRY</h2>
          <p class="section-description">
            제품 문의, 기술 상담, 견적 요청 등을 신청하실 수 있습니다.
          </p>
        </div>

        <div class="row">
          <!-- 연락처 안내 카드 -->
          <div class="col-md-5 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h4 class="card-title">고객지원 안내</h4>
              </div>
              <div class="card-body">
                <div class="contact-item">
                  <h5>대표 전화</h5>
                  <p>(+82) 31 8055 8664</p>
                </div>
                <div class="contact-item">
                  <h5>팩스 번호</h5>
                  <p>(+82) 31 8077 2038</p>
                </div>
                <div class="contact-item">
                  <h5>대표 이메일</h5>
                  <p><a href="mailto:sie@sie-ea.com">sie@sie-ea.com</a></p>
                </div>
                <div class="contact-item">
                  <h5>본사 주소</h5>
                  <p>경기 화성시 동탄기흥로 594-7 루체스타비즈 411호</p>
                </div>
                <div class="contact-item">
                  <h5>운영 시간</h5>
                  <p>평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 온라인 문의 폼 -->
          <div class="col-md-7 mb-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">온라인 문의 접수</h4>
              </div>
              <div class="card-body">
                <div v-if="submitted" class="alert alert-success">
                  <strong>문의가 성공적으로 접수되었습니다!</strong><br />
                  빠른 시일 내에 담당자가 연락드리겠습니다.
                  <div class="mt-3">
                    <button class="btn btn-outline-success btn-sm" @click="resetForm">
                      추가 문의 작성
                    </button>
                  </div>
                </div>

                <form v-else @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">회사명 <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.company"
                        placeholder="회사명을 입력하세요"
                        required
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">담당자명 <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.name"
                        placeholder="성함을 입력하세요"
                        required
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">이메일 <span class="text-danger">*</span></label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="form.email"
                        placeholder="example@company.com"
                        required
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">연락처 <span class="text-danger">*</span></label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="form.phone"
                        placeholder="010-0000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">문의 유형</label>
                    <select class="form-control form-select" v-model="form.type">
                      <option value="제품 및 시스템 견적">제품 및 시스템 견적 문의</option>
                      <option value="기술 상담">기술 상담 및 사양 문의</option>
                      <option value="유지보수">유지보수 및 A/S</option>
                      <option value="기타">기타 문의</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">제목 <span class="text-danger">*</span></label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.title"
                      placeholder="문의 제목을 입력하세요"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">문의 내용 <span class="text-danger">*</span></label>
                    <textarea
                      class="form-control"
                      rows="5"
                      v-model="form.content"
                      placeholder="상세 문의 내용을 입력하세요"
                      required
                    ></textarea>
                  </div>

                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-danger" :disabled="loading">
                      {{ loading ? '접수 중...' : '문의하기' }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import { submitInquiry } from '@/api'

const loading = ref(false)
const submitted = ref(false)

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  type: '제품 및 시스템 견적',
  title: '',
  content: '',
})

const resetForm = () => {
  form.company = ''
  form.name = ''
  form.email = ''
  form.phone = ''
  form.type = '제품 및 시스템 견적'
  form.title = ''
  form.content = ''
  submitted.value = false
}

const handleSubmit = async () => {
  loading.value = true
  try {
    const result = await submitInquiry({ ...form })
    if (result.success) {
      submitted.value = true
    } else {
      alert(result.message || '문의 접수 중 오류가 발생했습니다.')
    }
  } catch {
    alert('문의 접수 중 오류가 발생했습니다.')
  } finally {
    loading.value = false
  }
}
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

.contact-item {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.contact-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.contact-item h5 {
  color: #007bff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-item p {
  margin: 0;
  color: #666;
}
</style>
