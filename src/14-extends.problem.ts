import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
interface Core {
	id: string
}

interface User extends Core {
	firstName: string;
	lastName: string;
}

interface Post extends Core {
	title: string;
	body: string;
}

interface Comment extends Core {
	comment: string;
}

type tests = [
	Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
	Expect<Equal<Post, { id: string; title: string; body: string }>>,
	Expect<Equal<Comment, { id: string; comment: string }>>,
];
