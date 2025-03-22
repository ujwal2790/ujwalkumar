import type React from "react"
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiFlask,
  SiExpress,
  SiReact,
  SiKubernetes,
  SiNumpy,
  SiPandas,
  SiTerraform,
  SiDocker,
  SiGooglecloud,
  SiFirebase as SiFirestore,
  SiGit,
  SiPostman,
  SiJupyter,
  SiAmazonec2,
  SiGooglebigquery,
} from "react-icons/si"
import cloudrunIcon from '../icons/cloud_run.png'
import cloudfunctionIcon from '../icons/cloud_functions.png'
import appengineIcon from '../icons/app_engine.png'
import artifactRegistryIcon from '../icons/artifact_registry.png'
import cloudbuildIcon from '../icons/cloud_build.png'
import cloudMonitoringIcon from '../icons/cloud_monitoring.png'
import schedulerIcon from '../icons/cloud_scheduler.png'
import storageIcon from '../icons/cloud_storage.png'
import computeIcon from '../icons/compute_engine.png'
import DialogflowIcon from '../icons/dialogflow_cx.png'
import FirestoreIcon from '../icons/firestore.png'
import kubernetesIcon from '../icons/google_kubernetes_engine.png'
import secretIcon from '../icons/secret_manager.png'
import workflowsicon from '../icons/workflows.png'
import { BiLogoPostgresql } from "react-icons/bi"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages and Databases",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#4584b6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00758f]" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-[#336791]" /> },
      { name: "Firestore", icon: <SiFirestore className="text-[#ffca28]" /> },
    ],
  },
  {
    name: "Frameworks and Libraries",
    skills: [
      { name: "Flask", icon: <SiFlask className="text-white" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326ce5]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#4dabcf]" /> },
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "Terraform", icon: <SiTerraform className="text-[#7b42bc]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ed]" /> },
    ],
  },
  {
    name: "Cloud Tools",
    skills: [
      { name: "Google Cloud Platform", icon: <SiGooglecloud className="text-[#4285f4]" /> },
      { name: "Cloud Run", icon: <img src={cloudrunIcon.src} alt="Cloud Run" className="w-[32px] h-[32px] object-contain" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: "Cloud Functions", icon: <img src={cloudfunctionIcon.src} alt="Cloud Functions"  /> },
      { name: "App Engine", icon: <img src={appengineIcon.src} alt="App Engine"  /> },
      { name: "Cloud Storage", icon: <img src={storageIcon.src} alt="Cloud Storage"  /> },
      { name: "Cloud Scheduler", icon: <img src={schedulerIcon.src} alt="Cloud Scheduler"  /> },
      { name: "Firestore", icon: <img src={FirestoreIcon.src} alt="Cloud Run"  /> },
      { name: "Compute Engine", icon: <img src={computeIcon.src} alt="Compute Engine"  /> },
      { name: "Dialogflow", icon: <img src={DialogflowIcon.src} alt="Dialogflow"  /> },
      { name: "Google Kubernetes Engine", icon: <img src={kubernetesIcon.src} alt="Google Kubernetes Engine"  /> },
      { name: "Secrte Manager", icon: <img src={secretIcon.src} alt="Secrte Manager"  /> },
      { name: "GCP Workflows", icon: <img src={workflowsicon.src} alt="GCP Workflows"  /> },
      { name: "BigQuery", icon: <SiGooglebigquery className="text-[#4285f4]" /> },
      { name: "Amazon EC2", icon: <SiAmazonec2 className="text-[#ff9900]" /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#f05032]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-[#f37626]" /> },
    ],
  },
]

