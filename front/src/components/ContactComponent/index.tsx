import React from "react";

const ContactsSection: React.FC = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container w-md bg-gray-50 p-10">
        <h2 className="text-2xl font-bold text-gray-800 pb-2">Contacts</h2>
        <p className="text-lg text-gray-600 pb-4">
          For any inquiries or assistance, please feel free to reach out to us.
        </p>
        <div className="flex flex-col space-y-2">
          <p className="text-gray-800">
            <span className="font-bold">Email:</span> example@email.com
          </p>{" "}
          {/* Change email */}
          <p className="text-gray-800">Phone: +1234567890</p>{" "}
          {/* Change phone number */}
          <p className="text-gray-800">
            Address: 123 Apple Street, New York
          </p>{" "}
          {/* Change address */}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
