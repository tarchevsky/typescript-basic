// {
//    "userId": 1,
//    "id": 1,
//    "title": "delectus aut autem",
//    "info": {
//       "desc": "delectus aut autem",
//       "isActive": true
//    },
//    "tags": [
//       {
//          "name": "my name",
//          "value": 1000
//       }
//    ]
// }

interface Root {
	userId: number;
	id: number;
	title: string;
	info: Info;
	tags: Tags[];
}

interface Info {
	desc: string;
	isActive: boolean;
}

interface Tags {
	name: string;
	value: number;
}
