// stores/useFontStore.js
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    allNotes: [],
    archivedNotes: [],
    taggedNotes: [],
    note: null,
    error: null
  }),
  actions: {
    async fetchNotes() {
      const client = useSupabaseClient();
      const user = useSupabaseUser();
      try {
        if (!user.value) {
          this.error = 'User not logged in';
          return;
        }

        const { data, error: fetchError } = await client
          .from('notes')
          .select('*')
          .eq('is_archived', false)
          .eq('user_id', user.value.id);

        if (fetchError) {
          this.error = fetchError.message;
        } else {
          this.allNotes = data;
        }
      } catch (e) {
        this.error = e.message;
      }
    },
    async fetchArchivedNotes() {
      const client = useSupabaseClient();
      const user = useSupabaseUser();
      try {
        if (!user.value) {
          this.error = 'User not logged in';
          return;
        }

        const { data, error: fetchError } = await client
          .from('notes')
          .select('*')
          .eq('is_archived', true)
          .eq('user_id', user.value.id);

        if (fetchError) {
          this.error = fetchError.message;
        } else {
          this.archivedNotes = data;
        }
      } catch (e) {
        this.error = e.message;
      }
    },
    async fetchTaggedNotes(tag) {
      const client = useSupabaseClient();
      const user = useSupabaseUser();
      try {
        if (!user.value) {
          this.error = 'User not logged in';
          return;
        }

        const { data, error: fetchError } = await client
          .from('notes')
          .select('*')
          .eq('is_archived', false)
          .eq('user_id', user.value.id)
          .contains('tags', [tag]);

        if (fetchError) {
          this.error = fetchError.message;
        } else {
          this.taggedNotes = data;
        }
      } catch (e) {
        this.error = e.message;
      }
    },
    async fetchNote(id) {
      const client = useSupabaseClient();
      const user = useSupabaseUser();
      try {
        if (!user.value) {
          this.error = 'User not logged in';
          return;
        }

        const { data, error: fetchError } = await client
          .from('notes')
          .select('*')
          .eq('id', id)
          .eq('user_id', user.value.id);

        if (fetchError) {
          this.error = fetchError.message;
        } else {
          this.note = data;
        }
      } catch (e) {
        this.error = e.message;
      }
    }
  }
});
