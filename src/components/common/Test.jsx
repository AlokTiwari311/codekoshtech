import  { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    const projectAnimation = () => {
      const container = document.querySelector(".elem-container");
      const fixed = document.querySelector(".fixed-image");

      const handleMouseEnter = () => {
        fixed.style.display = "block";
      };

      const handleMouseLeave = () => {
        fixed.style.display = "none";
      };

      const handleElemMouseEnter = (e) => {
        const image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url("${image}")`;
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      const elems = document.querySelectorAll(".elem");
      elems.forEach((e) => {
        e.addEventListener("mouseenter", () => handleElemMouseEnter(e));
      });

      // Cleanup event listeners on unmount
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        elems.forEach((e) => {
          e.removeEventListener("mouseenter", handleElemMouseEnter);
        });
      };
    };

    projectAnimation();
  }, []);

  // Data for the list of elements
  const projects = [
    {
      name: "SOHO 2023",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1644_Copy%20of%20DSC04084.webp"
    },
    {
      name: "50th Anniversary",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f5_Copy%20of%20Nike_Soho_50th_SU22_FL1_6252.webp"
    },
    {
      name: "Air Force 2021",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16cb_Copy%20of%20Nike_Soho_AMD21_0772_LORES.webp"
    },
    {
      name: "Makers Studio HOI",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1732_Nike_HOI_50th_SU22_FL1_5393.webp"
    },
    {
      name: "Play New Kidvision",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1694_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-26-p-1080.webp"
    },
    {
      name: "SOHO NYC",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163a_Copy-of-IMG_1179.webp"
    },
    {
      name: "NYFC Popup",
      image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009.webp"
    }
  ];

  return (
    <div className="w-full h-full">
      <div className="fixed-image"></div>

      <section className="projectSection" id="projectSection">
        <div className="title border-t-2 border-green-400">
          <p className="text-right w-full">featured projects</p>
        </div>
        <ul className="elem-container">
          {projects.map((project, index) => (
            <li key={index} className="elem border-2 border-red-400" data-image={project.image}>
              <div className="overlay"></div>
              <a href="#" className="text-right w-full">{project.name}
              <p className='para'>hey ya</p>
              </a>
              
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Test;
