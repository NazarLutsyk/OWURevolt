import task from "./task";
import client from "./client";
import group from "./group";
import course from "./course";
import application from "./application";
import status from "./status";
import social from "./social";
import payment from "./payment";

export default {
    ...task,
    ...client,
    ...group,
    ...course,
    ...application,
    ...status,
    ...social,
    ...payment,
}