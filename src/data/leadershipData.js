// Leadership Domain (LD) - Surveyor 1
// Total: 58 Sub-standards

export const ACTIVITY_TYPES = {
  DOC: 'Document Review',
  OBS: 'Observation',
  INT: 'Interview',
  PER: 'Personnel File',
  DEN: 'Dental Record Review'
};

export const leadershipStandards = [
  // LD.1 - The governing body defines its structure and operational responsibilities
  {
    id: 'LD.1',
    code: 'LD.1',
    title: 'The governing body defines its structure and operational responsibilities in a written document.',
    substandards: [
      {
        id: 'LD.1.1',
        code: 'LD.1.1',
        text: 'The governing body approves and periodically reviews the center\'s mission, vision, and values and makes it public.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.1.2',
        code: 'LD.1.2',
        text: 'The governing body approves the center\'s strategic plan, the scope of services, and key policies and procedures.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.1.3',
        code: 'LD.1.3',
        text: 'The governing body approves the center\'s operating and capital budgets, as well as other resources required to manage the center efficiently.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.1.4',
        code: 'LD.1.4',
        text: 'The governing body defines any approval authority delegation.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.1.5',
        code: 'LD.1.5',
        text: 'The governing body appoints a qualified director responsible for managing the dental center.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.2 - Quality and patient safety program
  {
    id: 'LD.2',
    code: 'LD.2',
    title: 'The governing body approves and evaluates the center\'s quality and patient safety program, and risk management initiatives.',
    substandards: [
      {
        id: 'LD.2.1',
        code: 'LD.2.1',
        text: 'The governing body annually approves the quality and patient safety program, including the risk management initiatives.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.2.2',
        code: 'LD.2.2',
        text: 'The governing body receives and evaluates the quality and patient safety reports, including the risk management, corrective actions, and outcomes from the center, at least quarterly.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.2.3',
        code: 'LD.2.3',
        text: 'Recommended corrective actions by the governance are documented and received by the center director for implementation.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      }
    ]
  },
  // LD.3 - Organizational chart
  {
    id: 'LD.3',
    code: 'LD.3',
    title: 'The center has a defined, current, and clear organizational chart.',
    substandards: [
      {
        id: 'LD.3.1',
        code: 'LD.3.1',
        text: 'An approved and updated organizational chart identifies the relationships between the center\'s governance, leadership, and other directors with titles.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.3.2',
        code: 'LD.3.2',
        text: 'The staff are aware of the organizational chart and its intent, and can demonstrate their relationship to it.',
        activityType: 'INT',
        activityLabel: 'Interview'
      }
    ]
  },
  // LD.4 - Qualified director management
  {
    id: 'LD.4',
    code: 'LD.4',
    title: 'The dental center is effectively managed by a qualified director.',
    substandards: [
      {
        id: 'LD.4.1',
        code: 'LD.4.1',
        text: 'The center director, with other leaders, develops the mission, vision, and values statements, and communicates them to all staff.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.4.2',
        code: 'LD.4.2',
        text: 'The center director ensures the center\'s compliance with all relevant laws, regulations, and policies.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.4.3',
        code: 'LD.4.3',
        text: 'The center\'s director ensures the availability of adequate and proper resources for the planned services in accordance with the approved operating budget.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.4.4',
        code: 'LD.4.4',
        text: 'The center\'s director ensures a safe and functional facility environment for patients, families, and staff.',
        activityType: 'OBS',
        activityLabel: 'Observation'
      }
    ]
  },
  // LD.5 - Scope of services
  {
    id: 'LD.5',
    code: 'LD.5',
    title: 'The dental has a clear center\'s scope of services based on community needs.',
    substandards: [
      {
        id: 'LD.5.1',
        code: 'LD.5.1',
        text: 'The scope of services includes the specialty services available, the number of clinics for each specialty, the level of professional coverage for age group served, and working hours.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.5.2',
        code: 'LD.5.2',
        text: 'The scope of service is available to the public.',
        activityType: 'OBS',
        activityLabel: 'Observation'
      }
    ]
  },
  // LD.6 - Strategic plan
  {
    id: 'LD.6',
    code: 'LD.6',
    title: 'The leaders work collaboratively to develop the center\'s strategic plan.',
    substandards: [
      {
        id: 'LD.6.1',
        code: 'LD.6.1',
        text: 'The strategic plan is guided by the mission, vision, and inputs from patients/visitors needs, their families, staff, and others outside the entire community.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.6.2',
        code: 'LD.6.2',
        text: 'The strategic plan is based on a comprehensive evaluation of both internal and external environmental factors.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.6.3',
        code: 'LD.6.3',
        text: 'The strategic plan addresses all clinical and non-clinical services and programs.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.6.4',
        code: 'LD.6.4',
        text: 'The strategic plan spans a period of three to five years and is reviewed regularly.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.6.5',
        code: 'LD.6.5',
        text: 'The strategic plan includes the goals and objectives required to fulfill the center\'s mission.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      }
    ]
  },
  // LD.7 - Operational plan
  {
    id: 'LD.7',
    code: 'LD.7',
    title: 'The leaders translate the approved strategic plan into an operational plan.',
    substandards: [
      {
        id: 'LD.7.1',
        code: 'LD.7.1',
        text: 'Leaders translate the center\'s goals and objectives into operational plans with defined priorities, clearly delineated responsibilities, required resources, and time frames.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.7.2',
        code: 'LD.7.2',
        text: 'Leaders communicate the plans to all staff.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.7.3',
        code: 'LD.7.3',
        text: 'Departmental directors develop annual departmental plans in alignment with the center\'s strategic plan.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.7.4',
        code: 'LD.7.4',
        text: 'The leaders ensure the use of evidence-based and best practice information to develop and improve the center\'s services.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.7.5',
        code: 'LD.7.5',
        text: 'The leaders plan and budget for the upgrade or maintenance of buildings, equipment, and other resources.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.7.6',
        code: 'LD.7.6',
        text: 'The leaders must regularly to review the key performance indicators of services, surveys, audits, and feedback, and use the collected data to improve the center\'s services.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      }
    ]
  },
  // LD.8 - Staffing plan
  {
    id: 'LD.8',
    code: 'LD.8',
    title: 'The center\'s leaders work collaboratively to develop and maintain a center-wide staffing plan.',
    substandards: [
      {
        id: 'LD.8.1',
        code: 'LD.8.1',
        text: 'The staffing plan identifies the number and types of staff needed to meet patient care needs.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.8.2',
        code: 'LD.8.2',
        text: 'The staffing plan defines the number, type, and credentials of required staff, and their roles.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.8.3',
        code: 'LD.8.3',
        text: 'The center recruits and assigns appropriately qualified staff in accordance with the staffing plan and recruitment policy.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.8.4',
        code: 'LD.8.4',
        text: 'The staffing plan is updated annually, reviewed to identify deficiencies, and actions for improvement implemented as required.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      }
    ]
  },
  // LD.9 - Job descriptions
  {
    id: 'LD.9',
    code: 'LD.9',
    title: 'All categories of staff have clearly written job descriptions.',
    substandards: [
      {
        id: 'LD.9.1',
        code: 'LD.9.1',
        text: 'The job description outlines the knowledge, skills, and attitude necessary to perform the job responsibilities for the specified position.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.9.2',
        code: 'LD.9.2',
        text: 'The job description clearly defines the roles and responsibilities for the position.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.9.3',
        code: 'LD.9.3',
        text: 'Job responsibilities and clinical work assignments are based on the evaluation of staff credentials.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.9.4',
        code: 'LD.9.4',
        text: 'The job description is discussed with and signed by the employee upon hiring and is located in his/her personnel file.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.10 - Credentialing
  {
    id: 'LD.10',
    code: 'LD.10',
    title: 'There is a process in place for credentialing and re-credentialing of healthcare providers.',
    substandards: [
      {
        id: 'LD.10.1',
        code: 'LD.10.1',
        text: 'The credentialing process applies to all dental staff, dental assistants, and other clinical staff licensed to provide patient care on a full-time, part-time, or visiting basis.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.10.2',
        code: 'LD.10.2',
        text: 'The credentialing process includes gathering, verifying, and evaluating staff credentials including licenses, educational certificates, training certifications, and evidence of experience.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.10.3',
        code: 'LD.10.3',
        text: 'Credentials, to the extent possible, are verified from the original source directly or through a third party with documented evidence.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.10.4',
        code: 'LD.10.4',
        text: 'The center ensures the registration of healthcare professionals with the Saudi Commission for Health Specialties and licensing by the Ministry of Health (MOH) in accordance with the national laws and regulations.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.11 - Clinical privileges
  {
    id: 'LD.11',
    code: 'LD.11',
    title: 'All dentists have current delineated clinical privileges.',
    substandards: [
      {
        id: 'LD.11.1',
        code: 'LD.11.1',
        text: 'The center has a policy and procedure for granting privileges to its dental staff.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.11.2',
        code: 'LD.11.2',
        text: 'Clinical privileges are determined based on the dentist\'s current competence, the center\'s privileging policy, and the available services.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.11.3',
        code: 'LD.11.3',
        text: 'The dental staff\'s clinical privileges are recommended by the dental center director and approved by the governing body, either directly or by appropriate delegation.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.11.4',
        code: 'LD.11.4',
        text: 'The clinical privileges are reviewed and updated every two years or earlier if needed.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.12 - Orientation program
  {
    id: 'LD.12',
    code: 'LD.12',
    title: 'All new employees attend a mandatory orientation program.',
    substandards: [
      {
        id: 'LD.12.1',
        code: 'LD.12.1',
        text: 'The general orientation program for newly hired staff includes information about the center\'s mission, vision, values, organizational structure, patient and family rights, safety and infection control and the quality, patient safety, and risk management programs.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.12.2',
        code: 'LD.12.2',
        text: 'Each new employee attends a departmental-specific orientation program that assists him/her in properly executing the specific job responsibilities as outlined in the job description.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.15 - Staff performance evaluation
  {
    id: 'LD.15',
    code: 'LD.15',
    title: 'The leaders develop an effective process to evaluate staff performance at least annually.',
    substandards: [
      {
        id: 'LD.15.1',
        code: 'LD.15.1',
        text: 'The performance evaluation is based on objective criteria targeting staff knowledge, skills, and attitude.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.15.2',
        code: 'LD.15.2',
        text: 'The evaluation is conducted at the end of the initial probationary period and at least annually thereafter.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.15.3',
        code: 'LD.15.3',
        text: 'Evaluations include personal goals that the staff will aim to achieve over the next year.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.15.4',
        code: 'LD.15.4',
        text: 'Staff are involved in the evaluation of their performance by signing the evaluation and commenting on the required corrective actions.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      },
      {
        id: 'LD.15.5',
        code: 'LD.15.5',
        text: 'Information about staff credentials, privileges, competencies, orientation, training, education, and evaluation are securely kept in an updated personnel file.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.16 - Staff health and safety
  {
    id: 'LD.16',
    code: 'LD.16',
    title: 'The center implements a comprehensive program to protect the health and safety of staff.',
    substandards: [
      {
        id: 'LD.16.1',
        code: 'LD.16.1',
        text: 'The staff health and safety program covers all employees and is consistent with relevant laws and regulations.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.16.2',
        code: 'LD.16.2',
        text: 'The staff health and safety program is based on the protection of staff from occupational health and safety hazards, and workplace violence.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.16.3',
        code: 'LD.16.3',
        text: 'The patient health and safety program is coordinated with the center\'s quality, safety, risk management, and infection control programs, including health screening, immunizations, and post-exposure management.',
        activityType: 'INT',
        activityLabel: 'Interview'
      },
      {
        id: 'LD.16.4',
        code: 'LD.16.4',
        text: 'Staff have confidential and secured medical records that reflect their health status.',
        activityType: 'PER',
        activityLabel: 'Personnel File'
      }
    ]
  },
  // LD.17 - Ethical standards
  {
    id: 'LD.17',
    code: 'LD.17',
    title: 'The leaders develop ethical standards to guide patients\' care and employees\' code of conduct.',
    substandards: [
      {
        id: 'LD.17.1',
        code: 'LD.17.1',
        text: 'Marketing for staff and services, if performed, is carried out ethically as per the laws and regulations.',
        activityType: 'OBS',
        activityLabel: 'Observation'
      },
      {
        id: 'LD.17.2',
        code: 'LD.17.2',
        text: 'The leaders develop a set of values and a professional code of conduct for all employees.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      },
      {
        id: 'LD.17.3',
        code: 'LD.17.3',
        text: 'The leaders ensure that patients and their families are fully informed and protected when they are involved in clinical research projects.',
        activityType: 'DEN',
        activityLabel: 'Dental Record Review'
      },
      {
        id: 'LD.17.4',
        code: 'LD.17.4',
        text: 'The leaders develop a process to monitor and resolve critical shortages, patient and non-patient related, in a reasonable timeframe as determined by the center.',
        activityType: 'DOC',
        activityLabel: 'Document Review'
      }
    ]
  }
];

// Helper function to get all substandards as a flat array
export function getAllSubstandards() {
  const substandards = [];
  leadershipStandards.forEach(standard => {
    standard.substandards.forEach(sub => {
      substandards.push({
        ...sub,
        standardId: standard.id,
        standardTitle: standard.title
      });
    });
  });
  return substandards;
}

// Get count by activity type
export function getActivityTypeCounts(substandards) {
  const counts = {
    DOC: 0,
    OBS: 0,
    INT: 0,
    PER: 0,
    DEN: 0
  };
  substandards.forEach(sub => {
    if (counts[sub.activityType] !== undefined) {
      counts[sub.activityType]++;
    }
  });
  return counts;
}

// Chapter metadata
export const leadershipChapter = {
  id: 'LD',
  code: 'LD',
  name: 'Leadership of the Organization',
  description: 'Standards related to governance, leadership, strategic planning, staffing, and organizational management.',
  standardCount: leadershipStandards.length,
  substandardCount: getAllSubstandards().length,
  surveyor: '1'
};

export default leadershipStandards;
