---
title: Home
lang: en-US
sidebarDepth: 0
---

## Test Page
/
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.

29^th^

H~2~0

```plantuml
@startuml

skinparam ParticipantPadding 15
skinparam BoxPadding 36

box " WEB" #Transparent
  participant "Report View" as View
  participant "Report Controller" as Controller
end box

  participant "Report Dispatcher" as Dispatcher

box " WEB.Shared" #CCFFCC
  participant "Entities" as Entities
end box

box " WEB.Reports" #CCFFFF
  participant "Business Logic" as Logic
  participant "Report Generator" as Generator
  participant "Report Template" as Template
end box

Controller -> Dispatcher : Get Report
note left: Name of report\nIConnectionStringProvider

activate Controller

Dispatcher -->x Entities : Create
note right: Use IConnectionStringProvider

Dispatcher -->x Logic : Create
note right: Use Entities

Dispatcher -->x Generator : Create

Dispatcher -->x Template : Create
note right: Use Business Logic\nUse Report Generator

Dispatcher -> Controller : Return Template

deactivate  Controller

Controller -> View : Send Template

@enduml
```

ddd

```plantuml
@startuml

package "Requirements" as REQ {
  collections "Articles" as RA1
}

package "Architecture design" as AD {
  collections "Articles" as AA1
  artifact "Prototype" as AA2
}

package "Technical documentation" as TD {
  collections "Articles" as TDA1
  frame "Partial Technical documentation" as pt1 {
    collections "Articles" as TDpt1A1
    artifact "Use Case" as pt1u1
    artifact "Use Case" as pt1u2
    artifact "Use Case" as pt1u3
  }
  frame "Partial Technical documentation" as pt2 {
    collections "Articles" as TDpt2A1
    artifact "Use Case" as pt2u1
    artifact "Use Case" as pt2u2
    artifact "Use Case" as pt2u3
  }
}

package "End User documentation" as EUD {
  collections "Articles" as EUDA1
  collections "Articles" as EUDA2
  collections "Articles" as EUDA3
}

artifact "Test Case" as tc1
artifact "Test Case" as tc2
artifact "Test Case" as tc3

collections "Bug Reports" as bg1
collections "Bug Reports" as bg2
collections "Bug Reports" as bg3

REQ ==>> TD
AD ==>> TD

pt1u1 -down-> tc1
pt1u2 --> tc2
pt1u3 --> tc3

bg1 -up-> tc1
bg2 -up-> tc2
bg3 -up-> tc3

tc1 --> EUDA1
tc2 --> EUDA2
tc3 --> EUDA3

@enduml
```



```plantuml
@startuml
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ a | b | c }"]

  node1 -> node2 -> node3
}
@enduml
```

dddddsdgf sf
d fg dg

```dot
digraph example1 {
    aaaa -> ffff -> { 4, 5 };
    aaaa -> 3 -> { 4, 5, 7, ffff };
}
```

dfgdfgdfg

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

dfgdfg


```plantuml
@startditaa
+--------+   +-------+    +-------+
|        +---+ ditaa +--> |       |
|  Text  |   +-------+    |diagram|
|Document|   |!magic!|    |       |
|     {d}|   |       |    |       |
+---+----+   +-------+    +-------+
	:                         ^
	|       Lots of work      |
	+-------------------------+
@endditaa
```

```plantuml
@startuml
ditaa(--no-shadows, scale=0.8)
/--------\   +-------+
|cAAA    +---+Version|
|  Data  |   |   V3  |
|  Base  |   |cRED{d}|
|     {s}|   +-------+
\---+----/
@enduml
```