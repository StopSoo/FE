/**
 * 서로소 유니온 타입
 * - 교집합이 없는 타입들로만 만든 유니온 타입.
 */
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입

function login(user: User) {
  // 별다른 주석 없이 사용자 등급을 구별하기 위해, tag property를 사용.
  // tag property를 사용함으로써 세 타입은 서로소가 됨(!)
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님, 현재까지 ${user.kickCount}명을 강퇴시켰습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님, 현재까지 ${user.point}점 모았습니다.`);
  } else {
    console.log(`${user.name}님, 현재까지 ${user.visitCount}번 방문하였습니다.`);
  }
}