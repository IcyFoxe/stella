import { HStack, RadioGroup } from "@chakra-ui/react";
import "./PrioritySelector.css";
import { useSelectedPotentialsStore, type Priority } from "@/lib/store";

export const PrioritySelector = () => {
  const priority = useSelectedPotentialsStore((s) => s.currentPriority);
  const setPriority = useSelectedPotentialsStore((s) => s.setPriority);

  const items: { label: string; value: Priority }[] = [
    { label: "+++", value: "high" },
    { label: "++", value: "medium" },
    { label: "+", value: "low" },
  ];

  return (
    <div className="priority-selector">
      <span className="priority-label">Priority:</span>
      <RadioGroup.Root value={priority} onValueChange={(e) => setPriority(e.value as Priority)}>
        <HStack gap="6">
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>
    </div>
  );
};
