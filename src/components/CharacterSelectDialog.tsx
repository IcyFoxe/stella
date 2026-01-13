import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import "./CharacterSelectDialog.css";
import { CharacterList } from "./CharacterList";
import { useSelectedCharactersStore } from "@/lib/store";
import { useState } from "react";

interface Props {
  category: "main" | "sup1" | "sup2";
}

export const CharacterSelectDialog = ({ category }: Props) => {
  const [open, setOpen] = useState(false);
  const selectedCharacterStore = useSelectedCharactersStore();

  return (
    <Dialog.Root size="xl" placement="center" open={open} onOpenChange={({ open }) => setOpen(open)}>
      <Dialog.Trigger asChild>
        <button className="character-select-button">
          {selectedCharacterStore[category] ? (
            <img
              className="character-image"
              alt={selectedCharacterStore[category].name + " portrait"}
              fetchPriority="high"
              draggable="false"
              src={`https://res.cloudinary.com/dafqr01it/image/upload/v1762945238/ss/avatar/head_${selectedCharacterStore[category].id}01_XL.png`}
            />
          ) : (
            "Select Trekker"
          )}
        </button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Trekkers</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <CharacterList category={category} onSelect={() => setOpen(false)} />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
