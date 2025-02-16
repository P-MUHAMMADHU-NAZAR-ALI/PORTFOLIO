const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center py-10">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 - Smart Shoe for Blind People */}
          <div className="bg-[#F2EFE5] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <h2 className="text-[#fe5617] font-extrabold text-2xl mb-4">
              SMART SHOE FOR BLIND PEOPLE
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Developed an automated navigation system for visually challenged individuals, integrating smart shoes and spectacles to detect obstacles. The system uses ultrasonic sensors, buzzers, and a GPS module to track the user’s location.
            </p>
            <a
              href="https://github.com/P-MUHAMMADHU-NAZAR-ALI/NAVIGATION-SYSTEM-FOR-VISUALLY-CHALLENGED-PEOPLES"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              EXPLORE GITHUB
            </a>
          </div>

          {/* Project 2 - Face Door Lock Recognition */}
          <div className="bg-[#F2EFE5] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <h2 className="text-[#fe5617] font-extrabold text-2xl mb-4">
              FACE DOOR LOCK RECOGNITION USING ESP32
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Built a smart door lock system using face recognition with ESP32-CAM and FaceNet. The system authenticates users through a local server, unlocking or locking the door based on the model's response.
            </p>
            <a
              href="https://github.com/naveeen0308/face-recognition-door-lock-using-esp32cam"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              EXPLORE GITHUB
            </a>
          </div>

          {/* Project 3 - AI and IoT Integration */}
          <div className="bg-[#F2EFE5] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <h2 className="text-[#fe5617] font-extrabold text-2xl mb-4">
              AI AND IOT INTEGRATION PROJECT
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Developed a real-time driver drowsiness detection system using AI and IoT. Implemented MediaPipe for eye blink detection and integrated with Arduino Nano to trigger speed reduction and alert systems.
            </p>
            <a
              href="https://github.com/your-repo-link"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              EXPLORE GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

