
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import exp1 from "../assets/img/exp1.png";
import exp2 from "../assets/img/exp2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Experience</h2>
                        <p></p>
                        <Row>
                        <Col size={12} sm={6} md={6}>
                                <div className="proj-imgbx">
                                <img src={exp2} />
                                <div className="proj-txtx">
                                  <h4>SE Intern</h4>
                                 <h6>- Joined	teams	with	the	development	of	a	Video-Conferencing	web	portal based	on	Jitsi	Meet for	
client	and	worked	on	official	website	for	the	organisation.</h6>
                                </div>
                                 </div>
                          </Col>
                            <Col size={12} sm={6} md={6}>
                                <div className="proj-imgbx">
                                <img src={exp1} />
                                <div className="proj-txtx">
                                  <h4>Software Engineer</h4>
                                  <h6>- Developed	and	designed	an	android	service	for	Custom	ASOP	keyboard	and	also	its	configuration	
application and	also	joined	in	development	of	social	media	application.</h6> 
<h6> - Collaborated	with team	of development	of backend	for	client with	Java	Spring	Boot.</h6>
 <h6> - Joined	a	team	for	development	of a community	interaction	web-portal handling 1000+	user	data	
and	it’s processing, also	used AWS	S3,	Java	Collections,	and	various	other	tools	and	technologies.</h6>
<h6>- Optimised	code	and researched	about distinct	approaches	to	solve	problems.</h6>
                                </div>
                                 </div>
                          </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
