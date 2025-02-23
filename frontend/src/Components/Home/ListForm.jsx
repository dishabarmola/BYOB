import React, { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

const ListForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    contactNumber: "",
    location: "",
    serviceType: "",
    serviceDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!formData.contactNumber.trim() || !/^\d+$/.test(formData.contactNumber))
      newErrors.contactNumber = "Valid contact number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.serviceType.trim()) newErrors.serviceType = "Service type is required";
    if (!formData.serviceDetails.trim()) newErrors.serviceDetails = "Service details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('businessData', JSON.stringify(formData));
      alert("Business Listing Submitted Successfully!");
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div className="py-24 px-4 flex flex-col align-center justify-center bg-white">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold text-center text-black mb-2">Business Listing</h3>
        <h1 className="text-5xl font-bold text-center mb-8">
          <span className="text-black">List Your </span>
          <span className="text-red-500">Business</span>
          <span className="text-black"> Here</span>
        </h1>

        <div className="mx-auto max-w-3xl p-8 rounded-2xl border border-gray-200 shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <Typography variant="h6">Business Name</Typography>
              <Input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter business name"
                className="mt-2"
              />
              {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
            </div>

            <div>
              <Typography variant="h6">Owner Name</Typography>
              <Input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner name"
                className="mt-2"
              />
              {errors.ownerName && <p className="text-red-500 text-sm">{errors.ownerName}</p>}
            </div>

            <div>
              <Typography variant="h6">Contact Number</Typography>
              <Input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="mt-2"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>

            <div>
              <Typography variant="h6">Location</Typography>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter business location"
                className="mt-2"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>

            <div>
              <Typography variant="h6">Type of Service Offered</Typography>
              <Input
                type="text"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="Enter type of service"
                className="mt-2"
              />
              {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
            </div>

            <div>
              <Typography variant="h6">Relevant Details</Typography>
              <Textarea
                name="serviceDetails"
                value={formData.serviceDetails}
                onChange={handleChange}
                placeholder="Enter relevant details"
                className="mt-2"
              />
              {errors.serviceDetails && <p className="text-red-500 text-sm">{errors.serviceDetails}</p>}
            </div>

            <Button type="submit" className="mt-4 w-full bg-red-500 text-white hover:bg-red-600">
              Submit Listing
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
