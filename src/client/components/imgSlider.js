export default function Imgslider() {
  return (
    <div>
      <div
        className="simple-slider"
        style={{ marginRight: "5%", marginTop: "2%", marginLeft: "5%" }}
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{
                background:
                  'url("https://www.lephare-dz.com/wp-content/uploads/2020/06/oeuvres-sociales-featured.jpg") center center / cover no-repeat',
              }}
            />
            <div
              className="swiper-slide"
              style={{
                background:
                  'url("https://offer-all.com/wp-content/uploads/2021/05/offers-big-1.jpeg") center center / cover no-repeat',
              }}
            />
            <div
              className="swiper-slide"
              style={{
                background:
                  'url("https://img.freepik.com/free-vector/stylish-set-sale-offers-deals-labels_1017-17641.jpg?size=626&ext=jpg") center center / cover no-repeat',
              }}
            />
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
        <figure className="figure d-block" />
      </div>
    </div>
  );
}
