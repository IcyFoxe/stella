import { Select, type ListCollection } from "@chakra-ui/react";

interface Props {
  collection?: ListCollection;
  onBuildSelect?: (name: string) => void;
}

export const SelectBase = ({ collection, onBuildSelect }: Props) => {
  if (!collection) return <></>;

  return (
    <Select.Root collection={collection} onValueChange={(e) => onBuildSelect?.(e.value[0])}>
      <Select.HiddenSelect />

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
