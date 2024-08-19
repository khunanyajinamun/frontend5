import Image from "next/image"

export default function carousel () {
    return (
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"> 
    <div className="carousel-item active" date-bs-interval="10000000">
      <Image src="/assets/img/หน้าแรก.png" width={1920} height={955} alt="..." />
    </div>
    <div className="carousel-item" date-bs-interval="10000000">
      <Image src="/assets/img/หน้าสอง.png" width={1920} height={960} alt="..." />
    </div>
    <div className="carousel-item" date-bs-interval="10000000">
      <Image src="/assets/img/หน้าสาม.png" width={1920} height={960} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}