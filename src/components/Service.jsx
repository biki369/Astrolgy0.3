const Services = () => {
    const services = [
        { title: 'Horoscope Reading', description: 'Personalized daily and weekly horoscopes.' },
        { title: 'Birth Chart Analysis', description: 'Comprehensive birth chart interpretations.' },
        { title: 'Astrological Consultations', description: 'One-on-one consultations with experts.' },
    ];

    return (
        <section className="px-8 py-16 bg-white text-gray-900">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
