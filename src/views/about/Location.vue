<template>
  <PageHeader title="오시는 길" description="SIE-EA 본사 위치 및 연락처 정보입니다." />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">LOCATION</h2>
          <p class="section-description">SIE-EA 본사 위치 및 연락처 정보입니다.</p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">회사 정보</h4>
              </div>
              <div class="card-body">
                <div class="info-item">
                  <h5>회사명</h5>
                  <p>(주)SIE</p>
                </div>

                <div class="info-item">
                  <h5>대표자</h5>
                  <p>Jace HEO</p>
                </div>

                <div class="info-item">
                  <h5>주소</h5>
                  <p>경기 화성시 동탄기흥로 594-7 루체스타비즈 411호</p>
                </div>

                <div class="info-item">
                  <h5>전화번호</h5>
                  <p>(+82) 31 8055 8664</p>
                </div>

                <div class="info-item">
                  <h5>팩스</h5>
                  <p>(+82) 31 8077 2038</p>
                </div>

                <div class="info-item">
                  <h5>이메일</h5>
                  <p>sie@sie-ea.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">지도</h4>
              </div>
              <div class="card-body">
                <KakaoMap
                  :lat="center.lat"
                  :lng="center.lng"
                  :draggable="true"
                  style="width: 100%; height: 400px"
                >
                  <KakaoMapMarker :lat="center.lat" :lng="center.lng"></KakaoMapMarker>
                </KakaoMap>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">대중교통 안내</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h5>지하철</h5>
                    <ul>
                      <li>2호선 동탄역 하차 후 버스 환승</li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <h5>버스</h5>
                    <ul>
                      <li>동탄역, 동탄테크노밸리 하차</li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <h5>주차</h5>
                    <ul>
                      <li>건물 지하 주차장 이용 가능</li>
                      <li>방문 시 주차비 지원</li>
                    </ul>
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
import PageHeader from '@/components/PageHeader.vue'
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps'

const center = { lat: 37.213345710969, lng: 127.0945770917 }
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

.info-item {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item h5 {
  color: #007bff;
  margin-bottom: 5px;
  font-weight: 600;
}

.info-item p {
  margin: 0;
  color: #666;
}

.card ul {
  padding-left: 20px;
}

.card ul li {
  margin-bottom: 8px;
  color: #666;
}
</style>
