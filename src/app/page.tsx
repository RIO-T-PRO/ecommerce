import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-4 p-10">
        {/* Standard Circular Avatar */}
        <Avatar size="sm" shape="circle">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        {/* Square Stylized Avatar */}
        <Avatar size="lg" shape="square">
          <AvatarImage src="" alt="Item" />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Home;
