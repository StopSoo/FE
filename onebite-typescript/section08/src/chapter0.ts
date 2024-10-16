/**
 * 인덱스드 엑세스 타입
 * - 인덱스를 사용해서 다른 타입 내에 특정 property의 타입을 추출하는 타입.
 */
// 1. 객체
// 특징 1>객체의 괄호 표기법을 쓰듯 이용.
// 특징 2> 객체의 property가 추가되더라도, 부가적인 작업을 하지 않아도 됨.
// 특징 3> 인덱스에 들어가는 것은 값이 아니라 "타입"이다. (!) => const 상수 대입 불가.
// 특징 4> 대괄호를 중첩으로 사용할 수 있음. Ex> Post["author"]["age"]
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }
}
// author: { id: number; name: string; }
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "정지수",
    age: 26,
  }
};
printAuthorInfo(post.author);

// 2. 배열
// 특징 1> 인덱스드 엑세스 타입을 이용할 때 [number]를 이용하면 배열 타입으로부터 한 개의 요소만 가져오는 것. 실제 숫자를 넣어도 됨!
// 특정 2> 인덱스에 들어가는 것은 값이 아니라 "타입"이다. 
type PostList = { // 배열이라 []를 추가.
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }
}[];
// PostList[number]["author"]: 배열의 한 요소에서 author property를 뽑아온다는 뜻.
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post2: PostList[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "정지수",
    age: 26,
  }
};

// 3. 튜플
// 인덱스를 활용하여 튜플의 각 요소를 추출할 수 있다.
type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // 튜플의 인덱스 0번 요소의 타입을 추출.
// type Tup3 = Tup[3]; // 인덱스가 존재하지 않으면 추출 불가.
type TupNum = Tup[number];  // 튜플 요소들의 타입의 최적의 공통 타입을 추출.