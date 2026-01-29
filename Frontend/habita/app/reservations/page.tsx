import Image from "next/image";

const reservations = [
  {
    id: 1,
    image: "/property-1.jpg",
    name: "Beach House",
    checkIn: "29-01-2026",
    checkOut: "08-02-2026",
    nights: 2,
    price: "₦2,000,000",
  },
  {
    id: 2,
    image: "/property-1.jpg",
    name: "Luxury Apartment",
    checkIn: "10-02-2026",
    checkOut: "15-02-2026",
    nights: 5,
    price: "₦3,500,000",
  },
  {
    id: 3,
    image: "/property-1.jpg",
    name: "City Condo",
    checkIn: "20-02-2026",
    checkOut: "22-02-2026",
    nights: 2,
    price: "₦1,200,000",
  },
  {
    id: 4,
    image: "/property-1.jpg",
    name: "Mountain Villa",
    checkIn: "01-03-2026",
    checkOut: "06-03-2026",
    nights: 5,
    price: "₦4,000,000",
  },
];

const ReservationPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl"
          >
            {/* Image */}
            <div className="col-span-2 md:col-span-1">
              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={reservation.image}
                  alt={reservation.name}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />

              
              </div>
            </div>

            {/* Details */}
            <div className="col-span-3 space-y-2">
              <h2 className="mb-4 text-xl font-semibold">
                {reservation.name}
              </h2>
              <p><strong>Check-in Date:</strong> {reservation.checkIn}</p>
              <p><strong>Check-out Date:</strong> {reservation.checkOut}</p>
              <p><strong>Number of Nights:</strong> {reservation.nights}</p>
              <p><strong>Total Price:</strong> {reservation.price}</p>

              <p className="border rounded w-30  cursor-pointer ml-2 py-2  pb-2 bg-habita text-white px-1 hover:bg-blue-600 transition ">Go to property</p>


              
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ReservationPage;
