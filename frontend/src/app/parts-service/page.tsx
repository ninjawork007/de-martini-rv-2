import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const PartsAndService = () => {
  return (
    <div>
      <Title heading="RV Service Center - Repairs and Maintenance" />

      <div className="px-12 md:px-44 2xl:px-64">
        <div className="grid md:grid-cols-2 gap-5 text-center">
          <div className="p-5 bg-F4F5F7 rounded-lg">
            Our RV Service Center offers many specialty repairs and
            modifications including Expert Collision Repair, One-Piece
            Windshield Replacement, TV Modification and more!
            <br />
            Go to our Service Page for more info!
            <br />
            <br />
            <Link className="my-3" href="/parts-service/service">
              <button className="primary-button">Service</button>
            </Link>
          </div>
          <div className="p-5 bg-F4F5F7 rounded-lg">
            Our parts department can help you with anything from hard to find
            specialty parts to RV furniture.
            <br />
            <br />
            <Link className="my-3" href="/forms/special-parts">
              <button className="primary-button">
                Request a Special RV Part
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">
            DeMartini RV Service Center
          </h1>

          {/* <!-- Introduction Section --> */}
          <section className="mb-6">
            <p>
              DeMartini RV understands that getting a great deal on your new or
              used RV will put a smile on your face, but we also know that
              trusting the people that take care of it is what keeps you
              smiling. We proudly offer:
            </p>

            <ul className="list-disc pl-8 mt-4">
              <li>
                Highly trained and knowledgeable, Industry-certified Service
                Technicians
              </li>
              <li>Quality work at affordable prices</li>
              <li>Quick Turn-Around time</li>
              <li>Campsites with Full Hook-ups available</li>
              <li>
                Appointments recommended, but walk-ins won&apos;t be turned
                away!
              </li>
            </ul>

            <p className="mt-4">Hours: Monday-Friday, 8:30AM to 5:30PM</p>

            <p className="mt-4">
              At DeMartini RV we pride ourselves on customer satisfaction. If
              you have any further questions please feel free to contact me
              (Tony Hartman) directly at:
            </p>

            <p className="font-bold">(530) 272-0671</p>
            <p className="font-bold">tony@demartini.com</p>

            <p className="mt-4">Sincerely,</p>
            <p className="font-bold">Tony Hartman</p>
            <p className="font-bold">Parts and Service Director</p>
            <p className="font-bold">DeMartini RV Service Center</p>
            <p className="font-bold">625 Idaho Maryland Rd</p>
            <p className="font-bold">Grass Valley, CA 95945</p>
          </section>

          {/* <!-- RV Parts & Accessories Sales Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">RV Parts & Accessories Sales</h2>
            <p className="mt-2">
              At DeMartini RV Sales we have a large number of RV Parts in
              inventory and can special order just about any RV part you may
              need. Please email or call us with any parts questions you may
              have and an RV parts expert will be happy to help you.
            </p>

            <p className="mt-2 font-bold">Email: parts@demartini.com</p>
            <p className="font-bold">Phone: (530) 272-0670</p>
          </section>

          {/* <!-- Appliance Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">APPLIANCES</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Refrigerator sales, upgrades and installation</li>
              <li>Roof A/C sales, upgrades and installation</li>
              <li>Central Vacuum system sales, upgrades and installation</li>
              <li>Washer / Dryer sales, upgrades and installation</li>
              <li>Stove and microwave sales, upgrades and installation</li>
            </ul>
          </section>

          {/* <!-- Accessories Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">ACCESSORIES</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Bay slide tray installations</li>
              <li>RV and tire covers</li>
              <li>Sewer hoses and chemicals</li>
              <li>Fresh water filters, hoses, faucets, etc.</li>
              <li>Propane system components</li>
              <li>Steps and ladders</li>
              <li>Folding lounge chairs and tables</li>
              <li>Novelty lights</li>
              <li>50A, 30A, 15A cords and adapters</li>
              <li>12V and 6V batteries and boxes</li>
              <li>Varmint screens</li>
              <li>Lenses, bulbs and fuses</li>
              <li>Scissor and stabilizer jacks and pads</li>
              <li>Tow bars, braking systems, drop/rise hitches, etc.</li>
            </ul>
          </section>

          {/* <!-- Chassis Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">CHASSIS</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Wheel simulators and caps</li>
              <li>Bilstien shock sales and installation</li>
              <li>Air bag replacement and upgrades</li>
              <li>Cockpit / dash / gauge troubleshooting and repairs</li>
              <li>Entry step repairs and upgrades</li>
              <li>Jacks / Leveling system repairs and replacement</li>
              <li>Air ride system diagnostic and repair</li>
              <li>Slideout system troubleshooting and repairs</li>
              <li>Alternator repair and replacement</li>
            </ul>
          </section>

          {/* <!-- Electronics Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">ELECTRONICS</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Entertainment System upgrades</li>
              <li>Television upgrades / cabinet construction</li>
              <li>Backup camera systems</li>
              <li>Satellite installation and troubleshooting</li>
              <li>Stereo / sound system repair and installation</li>
              <li>Navigation systems</li>
            </ul>
          </section>

          {/* <!-- Electrical Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">ELECTRICAL</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Cockpit / dash / gauge troubleshooting and repairs</li>
              <li>Chassis electrical diagnostic and repair</li>
              <li>Interior lighting diagnostic and repair</li>
              <li>Energy management diagnostic and repair</li>
              <li>Charging and energy storage systems</li>
              <li>Interior lighting repair and upgrades</li>
            </ul>
          </section>

          {/* <!-- Interiors Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">INTERIORS</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>
                Flooring repairs, replacement and upgrades (carpet, tile,
                linoleum, wood)
              </li>
              <li>Daynight shades and interior blinds</li>
              <li>Couch replacement</li>
              <li>Hide-a-bed replacement</li>
              <li>Mattress upgrades (Sleep Number. Etc.)</li>
              <li>Windshield / privacy shades</li>
              <li>Countertop and cabinet repair</li>
              <li>Furniture replacement and special orders</li>
            </ul>
          </section>

          {/* <!-- Exteriors Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">EXTERIORS</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>External sunshades</li>
              <li>Paint matching / scratch & dent repair</li>
              <li>Wash and Wax</li>
              <li>Badge / Logo replacement</li>
              <li>Ladders</li>
              <li>Headlights / Marker lights</li>
              <li>Bay door repair and replacement</li>
              <li>Awning fabric repairs and replacement</li>
              <li>Awning upgrades, replacement and installation</li>
              <li>Roof vent upgrades and installation (FantasticVent, etc.)</li>
              <li>3M mask – paint protection system</li>
            </ul>
          </section>

          {/* <!-- Glass Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">GLASS</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Damaged / fogged window replacement</li>
              <li>Windshield replacement</li>
              <li>Chip repair</li>
            </ul>
          </section>

          {/* <!-- Plumbing Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">PLUMBING</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Plumbing system repairs and upgrades</li>
              <li>AquaHot service and repairs</li>
              <li>Water Heater repairs and installation</li>
              <li>Toilet installation, repairs and upgrades</li>
              <li>Washer / Dryer sales and installation</li>
              <li>Power surge protection sales and installation</li>
            </ul>
          </section>

          {/* <!-- Repair Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">REPAIR</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Roof repairs</li>
              <li>Fuel tank and system repairs</li>
              <li>Exhaust repairs</li>
              <li>Water damage repairs</li>
              <li>Refrigerator repairs</li>
              <li>Water heater and furnace repair</li>
              <li>Roof A/C repair</li>
              <li>Flooring repair</li>
              <li>Dash HVAC</li>
              <li>Cabinet repair</li>
              <li>Countertop repair</li>
              <li>Alternator repair</li>
              <li>Generator repair</li>
              <li>Inverter / Converter repair</li>
              <li>Upholstery repair</li>
              <li>Water leak detection and repairs</li>
              <li>Satellite repair</li>
              <li>Stove and microwave repair</li>
              <li>
                Entry latch, bay latch, grab handle, door and window repair
              </li>
              <li>Air ride system repair</li>
            </ul>
          </section>

          {/* <!-- Service Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">SERVICE</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Annual engine and transmission service</li>
              <li>Roof A/C installation, upgrades and troubleshooting</li>
              <li>Refrigerator installation and repairs</li>
              <li>Aqua hot service</li>
              <li>RV winterizing</li>
            </ul>
          </section>

          {/* <!-- Towing Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">TOWING</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Towed vehicle system sales and installation</li>
              <li>Tow System sales and installation</li>
              <li>Hydralift sales and installation</li>
              <li>Tow Dolly sales</li>
              <li>
                Weight distribution and sway control sales and installation
              </li>
              <li>5th wheel hitch sales and installation</li>
            </ul>
          </section>

          {/* <!-- Energy Management Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">ENERGY MANAGEMENT</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Solar system installation and upgrades</li>
              <li>Generator installation, service and repairs</li>
              <li>Battery replacement and upgrades</li>
              <li>Aladdin components</li>
              <li>Main display panels</li>
              <li>Fuse panels</li>
              <li>Intellitec</li>
              <li>Inverter / Converter repair and upgrades</li>
              <li>Propane system repairs and upgrades</li>
            </ul>
          </section>

          {/* <!-- Extended Services Section --> */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold">EXTENDED SERVICES</h2>
            <ul className="list-disc pl-8 mt-2">
              <li>Warranty claims</li>
              <li>Collision estimates and repairs for insurance</li>
              <li>Extended Warranty claims</li>
              <li>Windshield claims</li>
              <li>Consignment refurbishing</li>
              <li>Bumper to Bumper RV reconditioning</li>
              <li>Retail Storefront</li>
              <li>Warehouse of OEM, NOS, and obsolete parts</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PartsAndService;
