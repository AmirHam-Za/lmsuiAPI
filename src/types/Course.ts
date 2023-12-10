import { ParticipantType } from "./ParticipantType";
import { Speaker } from "./Speaker";
import { Speciality } from "./Speciality";

export default interface Course {
label: any;
  uuid: string;
  title: string;
  code: string;
  expired_at: string;
  released_at: string;
  completion_time: string;
  banner: {
    name: string;
    path: string;
  };
  content: string;
  accreditation: string;
  participant_types: Array<Course>;
  speakers: Speaker;
  specialities:Array<Speciality> ;
}