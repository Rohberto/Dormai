"use client";
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/work/workdetail.css';
import { useParams } from 'next/navigation';

const galleryItems = [
  { id: 1, title: "UBA", img: "/Images/works/uba/uba.jpg", images: [
      "/Images/works/uba/uba.jpg",
      "/Images/works/uba/uba2.jpeg",
      "/Images/works/uba/uba3.jpeg",
      "/Images/works/uba/uba4.jpeg",
      "/Images/works/uba/uba5.jpeg"
    ]
  },
  { id: 2, title: "Eterna", img: "/Images/works/eterna/eterna.jpg", images: [
      "/Images/works/eterna/eterna.jpg",
      "/Images/works/eterna/eterna1.jpeg"
    ]
  },
  { id: 3, title: "Rainoil", img: "/Images/works/rainoil/rainoil.jpg", images: [
      "/Images/works/rainoil/rainoil.jpg",
      "/Images/works/rainoil/rainoil1.jpeg"
    ]
  },
  { id: 4, title: "Transcorp", img: "/Images/works/transcorp/transcorp.jpg", images: [
      "/Images/works/transcorp/transcorp.jpg",
      "/Images/works/transcorp/transcorp2.jpeg",
      "/Images/works/transcorp/transcorp3.jpeg",
      "/Images/works/transcorp/transcorp4.jpeg"
    ]
  },
  { id: 5, title: "Parallex Bank", img: "/Images/works/parallex/parallex.jpg", images: [
      "/Images/works/parallex/parallex.jpg",
      "/Images/works/parallex/parallex2.jpeg",
      "/Images/works/parallex/parallex3.jpeg"
    ]
  },
  { id: 6, title: "Emadeb Energy", img: "/Images/works/emadeb/emadeb.jpg", images: [
      "/Images/works/emadeb/emadeb.jpg",
      "/Images/works/emadeb/emadeb2.jpeg",
      "/Images/works/emadeb/emadeb3.jpg",
      "/Images/works/emadeb/emadeb4.jpeg",
      "/Images/works/emadeb/emadeb5.jpeg",
      "/Images/works/emadeb/emadeb6.jpeg",
      "/Images/works/emadeb/emadeb7.jpeg"
    ]
  },
  { id: 7, title: "Total Energies", img: "/Images/works/Total/total.jpeg", images: [
      "/Images/works/Total/total.jpeg",
      "/Images/works/Total/total1.jpeg",
      "/Images/works/Total/total2.jpeg",
      "/Images/works/Total/total3.jpeg",
      "/Images/works/Total/total4.jpeg"
    ]
  },
  { id: 8, title: "Sayo Silver", img: "/Images/works/sayo/sayo.jpeg", images: [
      "/Images/works/sayo/sayo.jpeg",
      "/Images/works/sayo/sayo1.jpeg",
      "/Images/works/sayo/sayo2.jpeg"
    ]
  },
];

export default function WorkDetail() {
  const params = useParams();
  const { id } = params;
  const project = galleryItems.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="work-detail-section">
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