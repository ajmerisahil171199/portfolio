import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'FloroSense',
        description: "Desktop Application Developed with .NET Framework Using C# to Detect and Analyze Real Diamonds' Fluorescence Values and Colors through Image Processing. The application utilizes a Basler camera to capture images in three different LED colors: blue, red, and white. Image processing techniques are then employed to detect and crop diamond images from the captured photos. Detected diamonds are presented in a software interface, allowing users to rename them as necessary. The application stores pertinent information such as image paths, RGB values, fluorescence type, and diamond color into an Access database. This software serves as a valuable tool for determining diamond type and color, aiding in the accurate valuation of diamonds. ",
        tools: ['C#', '.Net Framework', 'EmguCV', 'AccesDB', 'Git'],
        role: 'FullStack Developer',
        code: '',   
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Diamond steaching',
        description: "Using C# .NET Framework with WinForms, this project facilitates the creation of diamonds by drawing them based on specified parameters such as table, girdle, pavilion height, crown height, and crown angle. These drawn diamonds are then utilized to configure diamonds for cutting on a 4P stonecutting machine. The project incorporates an Access database to store the entire history of previously cut diamonds. Furthermore, the application includes a scanning feature that enables the input of diamond parameters through scanning, allowing for seamless integration with QR codes for identifying relevant diamonds. This comprehensive system streamlines the diamond cutting process, from initial design to machine setup, enhancing efficiency and accuracy in diamond manufacturing.",
        tools: ['C#', '.Net Framework', 'AccessDB', 'WinForms'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'Image Enhancer',
        description: 'Desktop Application using .NET framework C#. To Enhance blur image that converts blur image into enhanced image.',
        tools: ['C#', '.Net Framework', 'EmguCV', 'OpenCV', 'Git'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'GroomOutfitRental',
        description: "C# .NET Framework desktop application designed for managing and renting groom's attire such as sherwanis, blazers, and kurtas. The application stores outfit details along with photos in an Access database and handles billing information, including pending amounts, deposit amounts, total bills, and bill printing.",
        tools: ['C#', '.Net Framework', 'AccesDB', 'Git'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 5,
        name: 'CMS ( Complaint Management System )',
        description: "I contributed to the development of a Complaint Management System using ReactJS, Express, NodeJS, and MongoDB. The project included a CMS that allowed administrators to report machine faults, which would then be received by engineers for resolution.",
        tools: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', "Git"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'RMS ( Rental Management System )',
        description: "Rental Management System is Web Application for manage rents and tenants and their bills payments and lease and ledger details. We have use ReactJS and NodeJS and MongoDB.",
        tools: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', "Git"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },