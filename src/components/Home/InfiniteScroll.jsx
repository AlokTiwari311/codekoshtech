const serviceData = [
  { title: "Web Dev" },
  { title: "Video Edit" },
  { title: "Logo Design" },
  { title: "Image Edit" },
  { title: "Catalog" },
  { title: "Portfolio" },
  { title: "Content" },
  { title: "Social Media" },
  { title: "Marketing" },
  { title: "Security" },
  { title: "Support" },
  { title: "Adaptation" },
  { title: "Web Dev" },
  { title: "Video Edit" },
  { title: "Logo Design" },
  { title: "Image Edit" },
  { title: "Catalog" },
  { title: "Portfolio" },
  { title: "Content" },
  { title: "Social Media" },
  { title: "Marketing" },
  { title: "Security" },
  { title: "Support" },
  { title: "Adaptation" },
];

const InfiniteScroll = () => {
  return (
    <section className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-20">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pointer-events-none">
        {serviceData.map((e, i) => (
          <div key={i}>
            <li className="text-4xl md:text-6xl  uppercase font-semibold whitespace-nowrap  mx-2 textBg inline-block text-transparent bg-clip-text">
              {e.title}
            </li>
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 w-12 h-2 rounded-full  "></span>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default InfiniteScroll;
