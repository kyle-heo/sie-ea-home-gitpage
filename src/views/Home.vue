<template>
  <div class="index-page sidebar-collapse">
    <!-- Hero Section -->
    <div
      class="page-header section-dark"
      :style="{ backgroundImage: `url(${$asset('assets/img/sieea/main-background-1.jpg')})` }"
    >
      <!-- <div class="filter"></div> -->
      <div class="content-center">
        <div class="container">
          <div class="title-brand">
            <h1 class="presentation-title">Analyzer System Integration</h1>
            <!-- <div class="fog-low">
              <img src="/assets/img/fog-low.png" alt="">
            </div>
            <div class="fog-low right">
              <img src="/assets/img/fog-low.png" alt="">
            </div> -->
          </div>
          <h2 class="presentation-subtitle text-center">
            SIE는 산업에 적용되는 Analyzer 및 System을 공급하고 있습니다.
          </h2>
        </div>
      </div>
      <!-- <div class="moving-clouds" style="background-image: url('/assets/img/sieea/clouds.png');"></div> -->
    </div>

    <!-- About Section -->
    <div class="main">
      <div class="features-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title font-weight-bold">ABOUT US</h2>
              <h5 class="description">
                SIE는 Analyzer System Integration 업체로 Oil Refinery, Petrochemical & Chemical,
                Iron & Steel, Power Plant, Laboratory, Environment, Semiconductor 산업에 적용되는
                Analyzer 및 System을 공급하고 있습니다.
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="nc-icon nc-bank"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">회사소개</h4>
                  <p class="description">연혁 및 조직도</p>
                  <router-link to="/about/greetings" class="btn btn-link btn-danger"
                    >자세히 보기</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="nc-icon nc-tv-2"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">주요사업</h4>
                  <p>Process Analyzer, CEMS, Utility, Gas Analyzer, SWAS 등</p>
                  <router-link to="/business/process-analyzer" class="btn btn-link btn-danger"
                    >자세히 보기</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="nc-icon nc-tag-content"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">취급제품</h4>
                  <p>Analyzer, Instrument, Electrical Part, HVAC, 소화기 등</p>
                  <router-link to="/products/analyzer" class="btn btn-link btn-danger"
                    >자세히 보기</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="nc-icon nc-single-copy-04"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">자료실</h4>
                  <p>사업실적, 카탈로그, 인증서 등</p>
                  <router-link to="/resources/performance" class="btn btn-link btn-danger"
                    >자세히 보기</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Business Section -->
      <div
        class="features-5 section-image"
        :style="{ backgroundImage: `url(${$asset('assets/img/sieea/main-background-2.jpg')})` }"
      >
        <div class="filter"></div>
        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto">
              <h2 class="font-weight-bold title text-center">BUSINESS</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5 ml-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-sound-wave"></i>
                </div>
                <h4 class="title">
                  <router-link to="/business/process-analyzer">Process Analyzer</router-link>
                </h4>
                <p>
                  Analyzer House, Analyzer Cabinet, Local Rack, Pipe Stanchion, Sample Conditioning
                  System, Pressure Reducing System, VPR System, HVAC, Gas Detection System, Sample
                  Probe & Sample Line, Electrical Equipment, Liquid Sample Recovery System, Software
                  & Hardware
                </p>
              </div>
            </div>
            <div class="col-sm-5 mr-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-box"></i>
                </div>
                <h4 class="title">
                  <router-link to="/business/utility-analyzer"
                    >Utility / Liquid Analyzer</router-link
                  >
                </h4>
                <p>
                  Utility / Liquid Analyzer는 공기, 물, 스팀 공정에 적용하여 생산 설비에 공급되는
                  Utility 시료의 불순물 농도를 측정하고 순도를 보장하여 최적화된 조건으로 Utility를
                  원활히 공급하며, 생산 설비의 성능과 효율을 유지시키기 위한 수질 관리 분석
                  시스템입니다.
                </p>
              </div>
            </div>
          </div>
          <div class="row bottom-line">
            <div class="col-sm-5 ml-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-tablet-2"></i>
                </div>
                <h4 class="title">
                  <router-link to="/business/gas-analyzer">Gas Analyzer</router-link>
                </h4>
                <p>
                  제품 오염 및 결함을 방지하기 위해 불순물 농도를 측정하고 순도를 보장하여 최적화된
                  조건으로 생산 공정에 공급되어야 합니다. 이에 따라, 반도체 산업에 필수적인
                  초고순도(UHP)가스를 측정하기 위한 분석기와 시스템을 제공하고 있습니다.
                </p>
              </div>
            </div>
            <div class="col-sm-5 mr-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-laptop"></i>
                </div>
                <h4 class="title">
                  <router-link to="/business/cems">CEMS / SWAS</router-link>
                </h4>
                <p>
                  CEMS (Continuous Emission Monitoring Systems)는 연속 배출 모니터링 시스템으로
                  발전소, 소각장, 산업 보일러 등 산업 현장 굴뚝에서 배출되는 대기 오염의 위험이 있는
                  배출 가스 측정과 배출량을 실시간으로 감시 및 관리하는 시스템입니다. SWAS (Steam &
                  Water Analysis System)는 Steam Turbine을 사용하는 모든 발전소에서 Steam Turbine에
                  사용되는 Boiler Feed Water 및 Steam을 분석하는 시스템입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="features-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="container">
                  <h2 class="title font-weight-bold">PRODUCTS</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="info info-horizontal">
                    <div class="icon icon-success">
                      <i class="nc-icon nc-vector"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Analyzer Part</h4>
                      <p>CEMS Analyzer, O₂ Analyzer, Gas Chromatograph</p>
                      <router-link to="/products/analyzer" class="btn btn-link"
                        >See more</router-link
                      >
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-warning">
                      <i class="nc-icon nc-settings-gear-65"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Instrument Part</h4>
                      <p>
                        pH, ORP, Conductivity Analyzer / Sensor, Gas Chromatograph Diaphragm Valve,
                        Rotary Valve, Gas Sampling Probes, Sample Gas Cooler
                      </p>
                      <router-link to="/products/instrument" class="btn btn-link"
                        >See more</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info info-horizontal">
                    <div class="icon icon-danger">
                      <i class="nc-icon nc-bulb-63"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Electrical Part</h4>
                      <p>
                        Electrical Parts for Explosion-proof Type (J/B, T/B, Lighting, Cable &
                        Gland)
                      </p>
                      <router-link to="/products/electrical" class="btn btn-link"
                        >See more</router-link
                      >
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-primary">
                      <i class="nc-icon nc-refresh-69"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">HVAC</h4>
                      <p>HVAC for Explosion-proof Type, Air Conditioner for Explosion-proof Type</p>
                      <router-link to="/products/hvac" class="btn btn-link">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 ml-auto">
              <div class="iphone-container">
                <img :src="$asset('assets/img/sieea/main-products-1.png')" alt="Product 1" />
                <img :src="$asset('assets/img/sieea/main-products-2.png')" alt="Product 2" />
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

onMounted(() => {
  // 필요한 초기화 작업
})
</script>

<style lang="scss" scoped>
@import '/assets/css/paper-kit.css';
@import '/assets/css/sieea.css';

.page-header {
  height: 60vh;
  min-height: 600px;
  max-height: 999px;

  .presentation-title {
    font-size: 4em;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
    background: #fbf8ec;
    background: -moz-linear-gradient(top, #ffffff 35%, #4e6773 100%);
    background: -webkit-linear-gradient(top, #ffffff 35%, #4e6773 100%);
    background: linear-gradient(to bottom, #ffffff 35%, #4e6773 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .presentation-subtitle {
    font-size: 1.7em;
    color: #ffffff;
  }
}

.section-dark {
  background-color: #0b1011;
  position: relative;

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}

.features-2 {
  padding: 80px 0;

  .title {
    margin-bottom: 30px;
  }
}

.features-5 {
  padding: 80px 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  .title {
    color: #ffffff;
  }

  .info {
    padding: 30px 10px;
    border-radius: 8px;
    // background: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
  }
}

.icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.bottom-line {
  margin-top: 30px;
}
</style>
