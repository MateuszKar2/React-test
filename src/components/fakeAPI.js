const hobbys = [
    { id: "1", name: "Football" },
    { id: "2", name: "Bakestball" },
    { id: "3", name: "Snowboard" },
    { id: "4", name: "Coking" },
    { id: "5", name: "Eating" },
    { id: "6", name: "watching TV" },
    { id: "7", name: "Travels" },
    { id: "8", name: "Slepping" },
    { id: "9", name: "Runnung" },
    { id: "10", name: "Climbing" }
  ];
  
  export const getHobbys = () => {
    return hobbys;
  };
  
  export const getHobbyById = (hobbyId) => {
    return hobbys.find((hobby) => hobby.id === hobbyId);
  };
  