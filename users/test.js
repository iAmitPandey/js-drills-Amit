import users from "./users.js";
import { groupOfUsers, interestedPlayers, mastersDegree, nationality} from "./solutions.js";

interestedPlayers(users);
interestedPlayers({});
interestedPlayers(null);
interestedPlayers(undefined);

// users staying in Germany

nationality(users);
nationality({});
nationality(null);
nationality(undefined);

// users with masters Degree

mastersDegree(users)
mastersDegree({})
mastersDegree(null)
mastersDegree(undefined)

// Group users based on their Programming language mentioned in their designation.

groupOfUsers(users)
groupOfUsers({})
groupOfUsers(null)
groupOfUsers(undefined)

