function Map() {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=...."
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
