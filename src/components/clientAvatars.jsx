import * as Avatar from "@radix-ui/react-avatar";

const avatarData = [
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "CT",
    imgURL:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },
];
export default function ClientAvatars ({ className }){
  return(
    <div className={`${className} flex flex-col lg:flex-row items-center justify-start lg:-space-x-2 overflow-hidden`}>
      <div className="flex">
        {avatarData.map((item, idx) => {
          return (
            <Avatar.Root
              key={idx}
              className="border-2 border-white h-10 w-10 flex items-center justify-center overflow-hidden rounded-full"
            >
            <Avatar.Image
              src={item.imgURL}
              className="h-full w-full object-cover"
            />
            <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
          </Avatar.Root>
          );
        })}
      </div>
    <p className="text-base text-gray-500 font-medium translate-x-5">
      <span className="text-skylerBlack font-teko text-2xl">2,300+</span> happy clients
    </p>
  </div>
  )
};