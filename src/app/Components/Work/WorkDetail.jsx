"use client";
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/work/workdetail.css';
import { useParams } from 'next/navigation';
const galleryDetails = [
  {
    id: 0,
    title: "TReception",
    images: [
      "/Images/Services/manufacturing.jpg",
      "/Images/project0/img2.jpg", // Placeholder for similar image
      "/Images/project0/img3.jpg", // Placeholder
    ],
    description: "TReception is a modern reception signage project designed to welcome visitors with a sleek and professional aesthetic. This project involved crafting custom signages using high-quality materials such as acrylic and LED lighting to ensure visibility and durability. The design incorporates minimalist elements with bold typography, making it suitable for corporate environments. Our team focused on integrating the client's brand colors and logo seamlessly, resulting in a cohesive look that enhances the reception area's ambiance. The installation process was meticulous, ensuring perfect alignment and secure mounting. This signage not only serves a functional purpose but also acts as a statement piece that reflects the company's values of innovation and excellence. Over the course of the project, we conducted multiple iterations based on client feedback to refine the design, ultimately delivering a product that exceeded expectations. The TReception signage has received positive feedback for its modern appeal and has contributed to improving the overall visitor experience. In addition, we provided maintenance guidelines to ensure longevity, including cleaning tips and periodic checks for lighting components. This project exemplifies our commitment to blending functionality with aesthetic appeal in signage solutions."
  },
  {
    id: 1,
    title: "Eterna Fuel Pump",
    images: [
      "/Images/Services/service-1.jpg",
      "/Images/project1/img2.jpg",
      "/Images/project1/img3.jpg",
    ],
    description: "The Eterna Fuel Pump project involved custom branding for fuel pumps at various stations. We utilized weather-resistant materials to withstand outdoor conditions, ensuring the signage remains vibrant over time. The design features high-contrast colors for easy readability from a distance, incorporating the Eterna logo prominently. Our approach included site surveys to determine optimal placement and size for maximum impact. The fabrication process used advanced printing techniques to achieve sharp, durable graphics. Installation was carried out by our certified team, minimizing disruption to station operations. This project highlights our expertise in outdoor signage, where durability and visibility are paramount. Clients have reported increased brand recognition and customer engagement following the implementation. We also integrated eco-friendly materials where possible, aligning with sustainability goals. The detailed planning phase included 3D mockups for client approval, ensuring the final product matched the vision perfectly. Post-installation, we offer ongoing support for any adjustments or repairs needed due to environmental factors."
  },
  // Add similar detailed entries for other items
  {
    id: 2,
    title: "Rainoil Fuel Station",
    images: [
      "/Images/Services/service-2.jpg",
      "/Images/project2/img2.jpg",
      "/Images/project2/img3.jpg",
    ],
    description: "Rainoil Fuel Station branding project encompassed comprehensive signage solutions for the entire station. From canopy signs to pump toppers, we designed elements that unify the brand's visual identity. Using illuminated signage for 24/7 visibility, the project enhances the station's presence on busy roads. Our team collaborated closely with Rainoil to incorporate their brand guidelines, resulting in a consistent and professional appearance. The materials chosen are resistant to fading and corrosion, ensuring long-term performance. Installation involved coordination with station management to avoid operational downtime. This project demonstrates our capability in large-scale branding, transforming ordinary fuel stations into recognizable landmarks. Feedback from Rainoil indicates improved customer loyalty and brand recall. Additionally, we provided digital renders during the design phase to visualize the final outcome. Maintenance services are included in our package, with scheduled inspections to keep the signage in top condition."
  },
  {
    id: 3,
    title: "UBA ATM",
    images: [
      "/Images/Services/service-3.jpg",
      "/Images/project3/img2.jpg",
      "/Images/project3/img3.jpg",
    ],
    description: "The UBA ATM signage project focused on creating clear and secure signage for ATM locations. We designed signs that guide customers while incorporating security features like reflective materials for low-light conditions. The project included directional signs, privacy screens, and branding elements. Our fabrication used tamper-resistant materials to ensure safety and longevity. Installation was precise, adhering to banking regulations and accessibility standards. This signage not only improves user experience but also reinforces UBA's brand trust. Clients have noted reduced confusion and enhanced security perceptions. We conducted usability tests during design to optimize layouts. Post-project, we offer quick-response maintenance to address any issues promptly."
  },
  {
    id: 4,
    title: "Tank & Timmy Restaurant",
    images: [
      "/Images/Services/service-4.jpg",
      "/Images/project4/img2.jpg",
      "/Images/project4/img3.jpg",
    ],
    description: "Tank & Timmy Restaurant signage project aimed to capture the essence of a vibrant dining experience. We created custom neon signs and menu boards that reflect the restaurant's unique theme. Using energy-efficient LEDs, the signs provide a warm, inviting glow. The design process involved thematic research to align with the restaurant's decor. Materials were selected for food-safe and easy-to-clean properties. Installation was timed to coincide with the restaurant's opening, ensuring a seamless launch. This project showcases our ability to blend creativity with practicality in hospitality signage. Positive reviews highlight the signage's role in attracting walk-in customers. We also provided digital menu integration options for future updates."
  },
  {
    id: 5,
    title: "Eterna Fuel Station",
    images: [
      "/Images/Services/service-5.jpg",
      "/Images/project5/img2.jpg",
      "/Images/project5/img3.jpg",
    ],
    description: "Eterna Fuel Station project involved full-site branding, including pylon signs and building facades. We used high-visibility materials to ensure the station stands out. The design incorporates dynamic elements like color gradients to represent energy and motion. Our team handled permits and compliance with local regulations. Fabrication utilized cutting-edge technology for precision cuts and finishes. Installation was efficient, with safety protocols in place. This comprehensive approach has led to increased traffic and sales for Eterna. The project includes modular components for easy updates. Client satisfaction surveys show high marks for design and execution."
  },
  {
    id: 6,
    title: "Access Bank",
    images: [
      "/Images/Services/service-6.jpg",
      "/Images/project6/img2.jpg",
      "/Images/project6/img3.jpg",
    ],
    description: "Access Bank signage project focused on branch identification and wayfinding. We designed signs that are both informative and aligned with the bank's corporate identity. Using durable aluminum composites, the signs resist weathering. The project included interior and exterior elements for a unified look. Installation teams worked during off-hours to minimize disruption. This signage enhances accessibility and brand presence. Access Bank reports improved customer navigation and satisfaction. We provided scalable designs for future expansions."
  },
  {
    id: 7,
    title: "Abstract Geometric Sign",
    images: [
      "/Images/Services/service-7.jpg",
      "/Images/project7/img2.jpg",
      "/Images/project7/img3.jpg",
    ],
    description: "The Abstract Geometric Sign project explored artistic signage for public spaces. We created signs using geometric patterns and abstract forms to evoke creativity. Materials included laser-cut metals and backlighting for dramatic effects. The design was inspired by modern art movements. Installation involved structural engineering for stability. This project pushes the boundaries of traditional signage, offering visual interest. It has been featured in design publications for its innovation."
  },
  {
    id: 8,
    title: "Rest Room - Gents.",
    images: [
      "/Images/Services/service-8.jpg",
      "/Images/project8/img2.jpg",
      "/Images/project8/img3.jpg",
    ],
    description: "Rest Room - Gents signage project emphasized clarity and inclusivity. We designed pictogram-based signs with braille for accessibility. Materials are vandal-resistant and easy to maintain. The project complied with ADA standards. Installation was quick and non-intrusive. This signage ensures clear direction in public facilities, improving user experience. Feedback highlights its effectiveness in high-traffic areas."
  },
];

export default function WorkDetail() {
   const params = useParams();
  const { id } = params;
  const project = galleryDetails.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="work-detail-section">
      <h1>{project.title}</h1>
      <p className="description">{project.description}</p>
      <div className="image-gallery">
        {project.images.map((img, index) => (
          <div key={index} className="image-container">
            <Image src={img} alt={`${project.title} image ${index + 1}`} width={600} height={400} />
          </div>
        ))}
      </div>
      <Link className='work-detail-btn' href="/work">Back to Works</Link>
    </section>
  );
}