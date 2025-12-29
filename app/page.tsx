'use client'
import Webhaeader from './components/webheader/page'

export default function Home() {
 
  
  return (
    <>
    <Webhaeader />

    <section className="homemainbanner">
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-lg-7 text-center align-self-center">
				<h1 className="bnrhd" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" ><span>YOUR GATEWAY TO A</span>
				Successful Career</h1>
				<p>Our handpicked, high demand industry programs transform you to be global leaders</p>
				
				<div className="cusjnbar">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					  <li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Hybrid</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Online</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Offline</a>
					  </li>
				</ul>
				
				<div className="srchbar">
							<select className="form-control">
								<option>Select Course</option>
								<option>Course 1</option>
								<option>Course 2</option>
								<option>Course 3</option>
							</select>
							<input className="form-control" placeholder="Find the perfect course for you....." />
							<button><i className="far fa-search"></i></button>
						</div>
						
				
				
				</div>

			</div>
			<div className="col-md-6 col-lg-5 text-center">
			<select className="form-control locationslcts">
								<option>Delhi</option>
								<option>Mumbai</option>
								<option>Chennai</option>
								<option>Kolkata</option>
							</select>
							
				<img src="./images/rightviewmain.png" className="rgtmds" data-aos="fade-up" data-aos-duration="3000" />
				
			</div>
			
		</div>
	</div>
</section>


    
    </>
    
    
  );
}
