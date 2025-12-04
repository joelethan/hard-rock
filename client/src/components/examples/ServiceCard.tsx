import ServiceCard from "../ServiceCard";
import { Palmtree } from "lucide-react";
import agroTourismImage from "@assets/stock_images/agro_tourism_farm_to_baeaf1f4.jpg";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Agro-Tourism"
        description="Experience farm life firsthand with guided tours, hands-on activities, and educational programs for all ages."
        image={agroTourismImage}
        icon={Palmtree}
      />
    </div>
  );
}
