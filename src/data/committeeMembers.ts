export interface CommitteeMember {
    name: string;
    role: string;
    group: string;
    image: string;
}

export const committeeMembers: CommitteeMember[] = [
    // Principal
    {
        name: "Dr. R. Kumar",
        role: "Principal",
        group: "Principal",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=R.%20Kumar&backgroundColor=b45309&textColor=ffffff",
    },

    // HOD
    {
        name: "Dr. S. Lakshmi",
        role: "Head of Department",
        group: "Head of Department",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=S.%20Lakshmi&backgroundColor=0891b2&textColor=ffffff",
    },

    // Staff Coordinators
    {
        name: "Prof. Shirley Josephine",
        role: "Staff Coordinator",
        group: "Staff Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Shirley%20Josephine&backgroundColor=0e7490&textColor=ffffff",
    },
    {
        name: "Prof. Arun Kumar",
        role: "Staff Coordinator",
        group: "Staff Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Arun%20Kumar&backgroundColor=0e7490&textColor=ffffff",
    },
    {
        name: "Prof. Meena Devi",
        role: "Staff Coordinator",
        group: "Staff Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Meena%20Devi&backgroundColor=0e7490&textColor=ffffff",
    },
    {
        name: "Prof. Karthik Raj",
        role: "Staff Coordinator",
        group: "Staff Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Karthik%20Raj&backgroundColor=0e7490&textColor=ffffff",
    },

    // Student Coordinators
    {
        name: "Parvin",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Parvin&backgroundColor=6d28d9&textColor=ffffff",
    },
    {
        name: "Ajay Kumar",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Ajay%20Kumar&backgroundColor=6d28d9&textColor=ffffff",
    },
    {
        name: "Priya S",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Priya%20S&backgroundColor=6d28d9&textColor=ffffff",
    },
    {
        name: "Rahul M",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Rahul%20M&backgroundColor=6d28d9&textColor=ffffff",
    },
    {
        name: "Keerthana R",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Keerthana%20R&backgroundColor=6d28d9&textColor=ffffff",
    },
    {
        name: "Divya K",
        role: "Student Coordinator",
        group: "Student Coordinators",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Divya%20K&backgroundColor=6d28d9&textColor=ffffff",
    },
];

// Ordered group labels for display
export const groupOrder = [
    "Principal",
    "Head of Department",
    "Staff Coordinators",
    "Student Coordinators",
];
