## Encounters 
A character travels to a location at a specific time and interacts with an object or character

```mermaid
graph LR
  A[Character] --"travels to"--> B[Location & Time]
  B --interacts with--> C[Character or Object]
  C --> D((Encounter))
```

### Examples

 - Lola is under water in the bay at 1PM and discovers a sunken ship
 - Carl walks to the inn at 10 AM and has conversation with Matt

## Memories 
A character feels emotions about an encounter

```mermaid
graph LR
  A[Character] --feels--> B[Emotion]
  B --about--> C[Encounters]
  C --> D((Memory))
```

### Examples

 - Lola is excited about finding the sunken ship 
 - Matt is happy that Carl visited him for a conversation

## Experience 
Two different characters feeling emotion about the same encounter

```mermaid
graph LR
  A[Character A] --feels--> B[Emotion]
  B --about--> C[Encounter A]
  C --> D((Experience))
  E[Character B] --feels--> F[Emotion]
  F --about--> G[Encounter A]
  G --> D
```

### Examples

- Matt and Carl are angry at each other because of the disagreement they had during their conversation 




