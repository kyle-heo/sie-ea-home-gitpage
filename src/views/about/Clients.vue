<template>
  <PageHeader title="고객사" description="SIE-EA와 함께하는 주요 고객사들을 소개합니다." />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">OUR CLIENTS</h2>
          <p class="section-description">SIE-EA와 함께하는 주요 고객사들을 소개합니다.</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="clients-container">
                  <!-- Engineering & Construction -->
                  <div class="client-category">
                    <h3>Engineering & Construction</h3>
                    <div class="row client-logos">
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.samsungengineering.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/samsung-ea.png')"
                            alt="삼성 E&A"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.toyo-eng.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/toyo-engineering.png')"
                            alt="도요엔지니어링"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- IT & Electronics -->
                  <div class="client-category">
                    <h3>IT & Electronics</h3>
                    <div class="row client-logos">
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.samsungbiologics.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/samsung-biologics.png')"
                            alt="삼성바이오로직스"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Refinery & Petrochemicals -->
                  <div class="client-category">
                    <h3>Refinery & Petrochemicals</h3>
                    <div class="row client-logos">
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.skinnovation.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/sk-innovation.png')"
                            alt="SK이노베이션"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="http://www.skadvanced.co.kr/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/sk-advanced.png')"
                            alt="SK어드밴스드"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.gscaltex.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/gs-caltex.png')"
                            alt="GS칼텍스"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.oilbank.co.kr/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/hyundai-oilbank.png')"
                            alt="현대오일뱅크"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Automation & Solutions -->
                  <div class="client-category">
                    <h3>Automation & Solutions</h3>
                    <div class="row client-logos">
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.yokogawa.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/yokogawa.png')"
                            alt="요코가와"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://www.emerson.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/emerson.png')"
                            alt="에머슨"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 client-item">
                        <a
                          href="https://global.abb/group/en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            :src="$asset('assets/img/sieea/clients/abb.png')"
                            alt="ABB"
                            class="img-fluid"
                          />
                        </a>
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

.client-category {
  margin-bottom: 40px;
}

.client-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
}

.client-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.client-item img {
  max-width: 100%;
  height: auto;
  max-height: 60px;
  transition: all 0.3s ease-in-out;
  opacity: 0.7;
}

.client-item a:hover img {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.1);
}
</style>
