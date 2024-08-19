import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row"> 
                

            <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/หมูผัด.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">หมูผัดซอสเปรี้ยวหวาน </h5>
                 <p className="card-text">ราคา 100 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/เป็ด.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">เป็ดปักกิ่ง</h5>
                 <p className="card-text">ราคา 120 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/บะกุ๊ดเต๋.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">บะกุ๊ดเต๋</h5>
                 <p className="card-text">ราคา 100 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}