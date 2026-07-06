import Hero from "./component/Hero"
import ComingSoon from "./component/ComingSoon"
import Excellence from "./component/Excellence"
import Solution from "./component/Solution"
import Blogs from "./component/Blogs"
import Register from "./component/Register"
import WhyEric from "./component/WhyEric";
import CaseStudy from "./component/CaseStudy"



export default function Home() {
  return (
 <>
 <Hero/>
 {/* <Chakara/> */}
 {/* <Eric/> */}
 <ComingSoon/>
 <Excellence/>
 <Solution/>
 <WhyEric/>
 <CaseStudy/>
 <Blogs/>
 <Register/>
 </>
  );
}
