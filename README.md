# CQRS_Practice_NEST
Study_Nest.JS

## 진행방법 
1. NEST.js를 통해 CRUD 구현
2. 구현한 CRUD Application을 @nestjs/cqrs 라이브러리를 통해 마이그레이션
3. README.md 에 개념 정리



# CQRS 

## CQRS란 
`CQRS`는 애플리케이션의 명령(Command), 조회(Query)를 분리하는 아키텍처 패턴이다. 이 패턴을 통해 데이터 베이스를 읽는 작업과 쓰는 작업을 독립적으로 수정, 확장할 수 있으며, Read를 제외한 CUD에 집중함으로써 성능을 향상시킬 수 있다는 특징이 존재한다.

## 사용 이유
CRUD는 데이터가 자주 변경되는 환경에서는 데이터의 일관성을 유지하기 어렵다. 변경된 데이터를 가져와 사용자가 수정할 수도 있는 것이며, 이러한 문제로 충돌이 발생할 수도 있다. 즉, 데이터베이스를 읽고 처리하는 중에 이미 데이터는 변경 되었을 가능성이 높다. CQRS는 이러한 가능성을 인정하고 읽기와 쓰기를 분리한다. 읽기 모델은 조회만을 수행하기 때문에, 조회 성능을 최적화하는 구조를 갖는다. 쓰기 모델은 데이터 변경에 효율적인 구조를 가질 수 있다. 이렇게 독립적인 모델은 확장성을 보장시킬 수 있으며, EventSourcing 방법을 통해 각 이벤트를 독립적으로 처리함으로써 분산 트랜잭션 문제를 해소할 수 있다.

동시성 문제를 해소시키며, 데이터 모델의 불일치를 해소, 트랙잭션 관리가 간소해지며, 높은 확장성을 가져갈 수 있다. 

### 데이터 일관성의 보장? 
일관성이란 데이터베이스 시스템에서 여러 트랜잭션이 동시에 실행될 때, 각 트랜잭션이 마치 시스템에서 유일하게 실행되는 것 처럼 데이터를 보는 것을 의미한다. 즉 어떤 시점에서 데이터를 조회해도 항상 유효, 정확한 값을 가져와야한다는 것을 의미한다. CQRS 방법을 사용하여 데이터의 일관성을 보장하는 방법은 아래와 같다. 

- Event Sourcing : 모든 상태 변경을 이벤트로 기록하고, 이벤트를 재생하여 현재 상태를 복원하는 방식. 
- Eventual Consistency : 최종적으로 모든 복제본이 일관된 상태가 되도록 하는 방식. 실시간 일관성이 필요하지 않다면 해당 방법을 사용하여 데이터의 일관성을 유지할 수 있다.



# 정리
2024/08/11
Event Sourcing은 과거 학습하였던 Message Queue와 연관이 깊다는 사실을 이해하였다. 데이터의 일관성을 보장하기 위해 이벤트 (명령)를 메세지 큐에 담아두고, 비동기적으로 처리함으로써 병렬적인 처리와 더불어, 동시적인 데이터 수정을 방지함으로써 일관성을 보장할 수 있지 않을까?

:
