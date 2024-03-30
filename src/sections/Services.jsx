import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container">
      <ul className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </ul>
    </section>
  );
};

export default Services;
